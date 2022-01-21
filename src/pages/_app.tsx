import type { AppProps as NextAppProps } from 'next/app'
import type { FunctionComponent } from 'react'
import Script from 'next/script'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import MainLayout from '~/components/MainLayout'
import { DefaultSeoConfig } from '~/default-seo.config'
import 'focus-visible/dist/focus-visible'
import { customTheme } from '~/theme'

type EnhancedComponent = NextAppProps['Component'] & {
  layout: FunctionComponent
}
type AppProps = NextAppProps & { Component: EnhancedComponent }

const insightsId = process.env.NEXT_PUBLIC_INSIGHTS_ID

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.layout || MainLayout

  return (
    <>
      {insightsId && (
        <Script
          strategy="afterInteractive"
          src="https://getinsights.io/js/insights.js"
          onLoad={() => {
            insights.init(insightsId)
            insights.trackPages()
          }}
        />
      )}
      <ChakraProvider theme={customTheme}>
        <DefaultSeo {...DefaultSeoConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
