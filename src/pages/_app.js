import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import SEO from '~/next-seo.config'
import 'focus-visible/dist/focus-visible'
import theme from '~/theme'

const App = ({ Component, pageProps }) => {
  const Layout = Component.layout || MainLayout

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
