import { type FC, type ReactNode } from 'react'

import { Flex, panda } from '@/styled-system/jsx'
import Header from '~/components/Header'

const UILayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Flex height="full" direction="column">
			<Header />
			<panda.main flex="1" mt="6" pb="8">
				{children}
			</panda.main>
		</Flex>
	)
}

export default UILayout
