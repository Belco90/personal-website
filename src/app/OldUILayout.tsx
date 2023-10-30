import { Box, Flex } from '@chakra-ui/react'
import { type FC, type ReactNode } from 'react'

import OldHeader from '~/components/OldHeader'

const OldUILayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Flex height="100%" direction="column">
			<OldHeader shadow="lg" width="full" />
			<Box as="main" flex="1" mt={6} pb={8}>
				{children}
			</Box>
		</Flex>
	)
}

export default OldUILayout
