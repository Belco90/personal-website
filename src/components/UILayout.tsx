import { type FC, type ReactNode } from 'react'

import { Flex, styled } from '@/styled-system/jsx'

const UILayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Flex height="100%" direction="column">
			<styled.main flex="1" mt={6} pb={8}>
				{children}
			</styled.main>
		</Flex>
	)
}

export default UILayout
