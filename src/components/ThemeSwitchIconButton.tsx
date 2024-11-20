'use client'

/**
 * Inspired by Panda CSS website theme switch button
 * https://github.com/chakra-ui/panda/blob/main/website/src/components/theme-switch-button.tsx
 */

import { useTheme } from 'next-themes'
import { type FC } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useIsClient } from 'usehooks-ts'

import { styled } from '@/styled-system/jsx'

function useThemeSwitch() {
	const theme = useTheme()
	const isClient = useIsClient()
	const { setTheme, resolvedTheme } = theme

	const isDark = isClient && resolvedTheme === 'dark'
	const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

	const IconComponent = isDark ? HiOutlineSun : HiOutlineMoon
	const iconSwitchText: 'Dark' | 'Light' = isDark ? 'Light' : 'Dark'

	return {
		IconComponent,
		iconSwitchText,
		toggleTheme,
		isReady: isClient,
	}
}

const ThemeSwitchIconButton: FC = () => {
	const { IconComponent, iconSwitchText, toggleTheme, isReady } =
		useThemeSwitch()
	const title = `Switch to ${iconSwitchText} mode`

	return (
		<styled.button
			opacity={isReady ? 1 : 0}
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
		</styled.button>
	)
}

export default ThemeSwitchIconButton
