import { Box, Flex } from '@chakra-ui/react'
import { type FC, type ReactNode } from 'react'

import Header from '~/components/Header'

const UILayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Flex height="100%" direction="column">
			<Header shadow="lg" width="full" />
			<Box as="main" flex="1" mt={6} pb={8}>
				{children}
			</Box>
		</Flex>
	)
}

export default UILayout
