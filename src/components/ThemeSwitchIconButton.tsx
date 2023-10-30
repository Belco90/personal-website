'use client'

/**
 * Inspired by Panda CSS website theme switch button
 * https://github.com/chakra-ui/panda/blob/main/website/src/components/theme-switch-button.tsx
 */

import { useTheme } from 'next-themes'
import { type FC } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

import { styled } from '@/styled-system/jsx'

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
		isDark,
		toggleTheme,
	}
}

const ThemeSwitchIconButton: FC = () => {
	const { IconComponent, iconSwitchText, isDark, toggleTheme } =
		useThemeSwitch()
	const title = `Switch to ${iconSwitchText} mode`

	return (
		<styled.button
			onClick={toggleTheme}
			title={title}
			aria-label={title}
			display="inline-flex"
			justifyContent="center"
			alignItems="center"
			borderRadius="md"
			height="10"
			minWidth="10"
			fontSize="2xl"
			_hover={{
				bgColor: 'emerald.100',
				color: isDark ? 'emerald.600' : 'current',
			}}
		>
			<IconComponent />
		</styled.button>
	)
}

export default ThemeSwitchIconButton
