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

function isDeployedToProduction() {
	return process.env.VERCEL_ENV === 'production'
}

function useGoatCounter() {
	const { isReady, asPath } = useRouter()

	useEffect(() => {
		if (isReady && typeof window !== 'undefined' && isDeployedToProduction()) {
			window.goatcounter?.count({
				path: asPath,
			})
		}
	}, [isReady, asPath])
}

export { useGoatCounter }
