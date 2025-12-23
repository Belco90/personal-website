import { useEffect, useRef, useState } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '#/components/ThemeProvider'
import { styled } from '#/styled-system/jsx'

import type { ThemeMode } from '#/components/ThemeProvider'

type ThemeOption = {
	value: ThemeMode
	label: string
}

const OPTIONS: Array<ThemeOption> = [
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },
	{ value: 'system', label: 'System' },
]

export function ThemeSwitchButton() {
	const { themeMode, resolvedTheme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const popoverRef = useRef<HTMLDivElement | null>(null)

	const toggle = () => setIsOpen((open) => !open)
	const close = () => setIsOpen(false)

	useEffect(() => {
		if (!isOpen) return

		const onPointerDown = (event: PointerEvent) => {
			if (!popoverRef.current) return
			if (popoverRef.current.contains(event.target as Node)) return
			close()
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') close()
		}

		document.addEventListener('pointerdown', onPointerDown)
		document.addEventListener('keydown', onKeyDown)

		return () => {
			document.removeEventListener('pointerdown', onPointerDown)
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen])

	const Icon = resolvedTheme === 'dark' ? HiOutlineMoon : HiOutlineSun

	return (
		<styled.div position="relative" ref={popoverRef}>
			<styled.button
				onClick={toggle}
				title="Switch theme mode"
				aria-label="Switch theme mode"
				aria-haspopup="menu"
				aria-expanded={isOpen}
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
				{resolvedTheme}
				<Icon />
			</styled.button>

			{isOpen ? (
				<styled.div
					role="menu"
					bgColor={{ base: 'white', _dark: 'gray.700' }}
					shadow="lg"
					borderWidth="1px"
					borderColor={{ base: 'gray.200', _dark: 'gray.600' }}
					rounded="lg"
					position="absolute"
					top="full"
					right="0"
					mt="2"
					minWidth="40"
					py="1"
					zIndex="9999"
				>
					{OPTIONS.map(({ value, label }) => {
						const isActive = value === themeMode

						return (
							<styled.button
								key={value}
								role="menuitemradio"
								aria-checked={isActive}
								onClick={() => {
									setTheme(value)
									close()
								}}
								display="flex"
								alignItems="center"
								gap="3"
								width="full"
								textAlign="left"
								px="3"
								py="2"
								cursor="pointer"
								bgColor={
									isActive
										? { base: 'primary.50', _dark: 'gray.600' }
										: 'transparent'
								}
								fontWeight={isActive ? 'semibold' : 'normal'}
								color={
									isActive ? { base: 'primary.700', _dark: 'white' } : 'inherit'
								}
								_hover={{
									bgColor: { base: 'gray.100', _dark: 'gray.600' },
								}}
							>
								<styled.span flex="1">{label}</styled.span>
							</styled.button>
						)
					})}
				</styled.div>
			) : null}
		</styled.div>
	)
}
