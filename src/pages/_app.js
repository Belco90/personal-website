import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'
import customTheme from '../theme'
import globalStyles from '../globalStyles'
import * as gtag from '../lib/gtag'
import 'typeface-open-sans'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
