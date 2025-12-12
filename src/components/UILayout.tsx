import { type FC, type ReactNode } from 'react'

import Header from '#/components/Header'
import { Flex, styled } from '#/styled-system/jsx'

const UILayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Flex height="full" direction="column">
			<Header />
			<styled.main flex="1" mt="6" pb="8">
				{children}
			</styled.main>
		</Flex>
	)
}

export default UILayout
