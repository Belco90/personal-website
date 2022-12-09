import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

const VA_DISABLE_KEY = 'va-disable'
const VA_TOGGLE_HASH = '#va-toggle'

function getIsVercelAnalyticsDisabled(): boolean {
	const currentUrl = new URL(document.URL)
	return (
		Boolean(currentUrl.searchParams.get(VA_DISABLE_KEY)) ||
		Boolean(localStorage.getItem(VA_DISABLE_KEY))
	)
}

function logToggleVercelAnalyticsAction(action: 'disabled' | 'enabled') {
	// eslint-disable-next-line no-console
	console.log(`Vercel Analytics has been ${action} for this browser`)
}

function useToggleVercelAnalytics(): { isEnabled: boolean } {
	const { isReady, replace, asPath } = useRouter()
	const isEnabledRef = useRef<boolean>(false)

	useEffect(() => {
		const isDisabled = getIsVercelAnalyticsDisabled()
		const statusText = isDisabled ? 'disabled' : 'enabled'
		console.log(`Vercel Analytics are ${statusText} for this browser`)
	}, [])

	useEffect(() => {
		const url = new URL(document.URL)
		const shouldToggleVercelAnalytics = url.hash === VA_TOGGLE_HASH

		if (isReady && shouldToggleVercelAnalytics) {
			const newUrl = asPath.replace(VA_TOGGLE_HASH, '')
			const isVercelAnalyticsDisabled = !!localStorage.getItem(VA_DISABLE_KEY)
			isEnabledRef.current = !isVercelAnalyticsDisabled

			if (isVercelAnalyticsDisabled) {
				localStorage.removeItem(VA_DISABLE_KEY)
				logToggleVercelAnalyticsAction('enabled')
			} else {
				localStorage.setItem(VA_DISABLE_KEY, '1')
				logToggleVercelAnalyticsAction('disabled')
			}
			void replace(newUrl, undefined, { shallow: true })
		}
	}, [replace, isReady, asPath])

	return { isEnabled: isEnabledRef.current }
}

const VercelAnalytics = () => {
	const { isEnabled } = useToggleVercelAnalytics()

	const isVercelProductionEnv =
		process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

	return (
		<Analytics
			beforeSend={(event) => {
				if (!isEnabled) {
					return null
				}

				return event
			}}
			mode={isVercelProductionEnv ? 'production' : 'development'}
			debug={!isVercelProductionEnv}
		/>
	)
}

export default VercelAnalytics
