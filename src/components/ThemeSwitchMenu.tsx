import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

import { useTheme } from '#/components/ThemeProvider'
import type { ThemeMode } from '#/components/ThemeProvider'
import { css } from '#/styled-system/css'
import { styled } from '#/styled-system/jsx'

import { Menu } from './ui'

interface ThemeOption {
	value: ThemeMode
	label: string
}

const OPTIONS: Array<ThemeOption> = [
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },
	{ value: 'system', label: 'System' },
]

export function ThemeSwitchMenu() {
	const { themeMode, setTheme } = useTheme()

	return (
		<Menu.Root lazyMount>
			<Menu.Trigger asChild>
				<styled.button
					aria-label={`Select theme mode (current: ${themeMode})`}
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
					<HiOutlineSun
						className={css({ display: { base: 'none', _light: 'initial' } })}
					/>
					<HiOutlineMoon
						className={css({ display: { base: 'none', _dark: 'initial' } })}
					/>
				</styled.button>
			</Menu.Trigger>

			<Menu.Positioner>
				<Menu.Content>
					<Menu.RadioItemGroup
						value={themeMode}
						onValueChange={(e) => setTheme(e.value as ThemeMode)}
					>
						<Menu.ItemGroupLabel>Theme mode</Menu.ItemGroupLabel>
						{OPTIONS.map(({ value, label }) => (
							<Menu.RadioItem key={value} value={value}>
								<Menu.ItemText>{label}</Menu.ItemText>
								<Menu.ItemIndicator />
							</Menu.RadioItem>
						))}
					</Menu.RadioItemGroup>
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	)
}
