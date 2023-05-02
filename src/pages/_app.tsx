import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import VercelAnalytics from '~/components/VercelAnalytics'
import { DefaultSeoConfig } from '~/default-seo.config'
import { theme } from '~/theme'
import { Karla, Rubik } from 'next/font/google'

const rubikFont = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] })
const karlaFont = Karla({ subsets: ['latin'], weight: ['400', '500', '700'] })

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-rubik: ${rubikFont.style.fontFamily};
					--font-karla: ${karlaFont.style.fontFamily};
				}
			`}</style>
			<VercelAnalytics />
			<DefaultSeo {...DefaultSeoConfig} />
			<ChakraProvider theme={theme}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ChakraProvider>
		</>
	)
}

export default App
