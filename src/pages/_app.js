import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import { DefaultSeoConfig } from '~/default-seo.config'
import 'focus-visible/dist/focus-visible'
import { customTheme } from '~/theme'

const App = ({ Component, pageProps }) => {
  const Layout = Component.layout || MainLayout

  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...DefaultSeoConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
