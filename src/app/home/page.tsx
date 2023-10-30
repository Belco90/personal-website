import { type FC } from 'react'

import { styled } from '@/styled-system/jsx'
import ThemeSwitchIconButton from '~/components/ThemeSwitchIconButton'

const HomePage: FC = () => {
	return (
		<div>
			<styled.h1 color="emerald.500">Hello 🐼!</styled.h1>
			<ThemeSwitchIconButton />
		</div>
	)
}

export default HomePage
