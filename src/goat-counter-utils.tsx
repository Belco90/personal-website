import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect } from 'react'

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

// Add "allow_local": true and disable the production check in useGoatCounter
// to test in local env.
const goatCounterSettings: Partial<GoatCounterSettings> = {
	// This is false (on prod) so the first page accessed gets reported here,
	// and sequent page navigation are reported by useGoatCount hook.
	// If not on prod, it's true so no onload event is triggered.
	no_onload: !getIsGoatCounterEnabled(),
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

const GoatCounterScript: FC = () => (
	<script
		data-goatcounter="https://belco.goatcounter.com/count"
		data-goatcounter-settings={dataGoatCounterSettings}
		async
		src="/scripts/goat-counter.js"
	/>
)

export { useGoatCounter, getIsGoatCounterEnabled, GoatCounterScript }
