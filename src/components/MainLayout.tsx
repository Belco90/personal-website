import { Box, Flex } from '@chakra-ui/react'

import Header from './Header'
import type { ReactNode } from 'react'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
	<Flex height="100%" direction="column">
		<Header shadow="lg" width="full" />
		<Box as="main" flex="1" mt={6} pb={8}>
			{children}
		</Box>
	</Flex>
)

export default MainLayout
