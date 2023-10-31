import { type FC } from 'react'

import { panda } from '@/styled-system/jsx'

const HomePage: FC = () => {
	return (
		<div>
			<panda.h1 color="primary.500">Hello 🐼!</panda.h1>
		</div>
	)
}

export default HomePage
