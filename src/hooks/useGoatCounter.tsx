import { useRouter } from 'next/router'
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

export { useGoatCounter, getIsGoatCounterEnabled }
