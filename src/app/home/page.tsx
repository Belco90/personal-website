import { type FC } from 'react'

import { panda } from '@/styled-system/jsx'
import ThemeSwitchIconButton from '~/components/ThemeSwitchIconButton'

const HomePage: FC = () => {
	return (
		<div>
			<panda.h1 color="emerald.500">Hello 🐼!</panda.h1>
			<ThemeSwitchIconButton />
		</div>
	)
}

export default HomePage
