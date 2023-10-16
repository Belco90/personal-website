'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { type FC, type ReactNode } from 'react'

//import VercelAnalytics from '~/components/VercelAnalytics'
import { theme } from '~/theme'

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{/*<VercelAnalytics />*/}
			<CacheProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</>
	)
}

export default Providers
