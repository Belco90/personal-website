import type { AppProps as NextAppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import { DefaultSeoConfig } from '~/default-seo.config'
import { theme } from '~/theme'
import { GoatCounterScript, useGoatCounter } from '~/goat-counter-utils'

type AppProps = NextAppProps

const App = ({ Component, pageProps }: AppProps) => {
	useGoatCounter()

	return (
		<>
			<GoatCounterScript />
			<Analytics />
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
