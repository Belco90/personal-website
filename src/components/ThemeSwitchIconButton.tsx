'use client'

/**
 * Inspired by Panda CSS website theme switch button
 * https://github.com/chakra-ui/panda/blob/main/website/src/components/theme-switch-button.tsx
 */

import { useTheme } from 'next-themes'
import { type FC } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

import { panda } from '@/styled-system/jsx'

function useThemeSwitch() {
	const theme = useTheme()
	const { setTheme, resolvedTheme } = theme

	const isDark = resolvedTheme === 'dark'
	const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

	const IconComponent = isDark ? HiOutlineSun : HiOutlineMoon
	const iconSwitchText: 'Dark' | 'Light' = isDark ? 'Light' : 'Dark'

	return {
		IconComponent,
		iconSwitchText,
		toggleTheme,
	}
}

const ThemeSwitchIconButton: FC = () => {
	const { IconComponent, iconSwitchText, toggleTheme } = useThemeSwitch()
	const title = `Switch to ${iconSwitchText} mode`

	return (
		<panda.button
			onClick={toggleTheme}
			title={title}
			aria-label={title}
			display="inline-flex"
			justifyContent="center"
			alignItems="center"
			rounded="md"
			height="10"
			minWidth="10"
			fontSize="2xl"
			_hover={{
				bgColor: 'primary.100',
				color: { base: 'current', _dark: 'primary.600' },
			}}
		>
			<IconComponent />
		</panda.button>
	)
}

export default ThemeSwitchIconButton
