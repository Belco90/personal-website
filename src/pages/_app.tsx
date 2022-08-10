import type { AppProps as NextAppProps } from 'next/app'
import Script from 'next/script'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import { DefaultSeoConfig } from '~/default-seo.config'
import { theme } from '~/theme'

type AppProps = NextAppProps

const insightsId = process.env.NEXT_PUBLIC_INSIGHTS_ID

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{insightsId && (
				<Script
					strategy="afterInteractive"
					src="https://getinsights.io/js/insights.js"
					onLoad={() => {
						const urlParams = new URLSearchParams(location.search)
						if (!urlParams.has('i-am-an-automatic-test')) {
							insights.init(insightsId)
							insights.trackPages()
						}
					}}
				/>
			)}
			<ChakraProvider theme={theme}>
				<DefaultSeo {...DefaultSeoConfig} />
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ChakraProvider>
		</>
	)
}

export default App
