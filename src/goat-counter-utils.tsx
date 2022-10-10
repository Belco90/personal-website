import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect } from 'react'
import Script from 'next/script'

declare global {
	interface Window {
		goatcounter?: {
			count: (params: {
				path?: string
				title?: string
				referrer?: string
				event?: boolean
			}) => void
		}
	}
}

interface GoatCounterSettings {
	no_onload: boolean
	allow_local: boolean
}

// Add "allow_local": true and disable the check in getIsGoatCounterEnabled
// to test in local env.
const goatCounterSettings: Partial<GoatCounterSettings> = {
	no_onload: true,
}

const dataGoatCounterSettings = JSON.stringify(goatCounterSettings)

function getIsGoatCounterEnabled() {
	return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
}

function handleRouteChange(url: string) {
	window.goatcounter?.count({
		path: url,
	})
}

function useGoatCounter() {
	const { events } = useRouter()

	// Count sequent pages navigated on client side
	useEffect(() => {
		getIsGoatCounterEnabled() &&
			events.on('routeChangeStart', handleRouteChange)

		return () => {
			// Unsuscribe if the component is unmounted
			getIsGoatCounterEnabled() &&
				events.off('routeChangeStart', handleRouteChange)
		}
	}, [events])
}

/**
 * Must be used in the _app page component.
 */
const GoatCounterScript: FC = () => {
	const { asPath } = useRouter()

	return (
		<Script
			data-goatcounter="https://belco.goatcounter.com/count"
			data-goatcounter-settings={dataGoatCounterSettings}
			async
			src="/scripts/goat-counter.js"
			strategy="afterInteractive"
			onLoad={() => {
				// non-null assertion is fine since goatcounter is loaded 100% sure here
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				window.goatcounter!.count({
					path: asPath,
				})
			}}
		/>
	)
}

export { useGoatCounter, getIsGoatCounterEnabled, GoatCounterScript }
