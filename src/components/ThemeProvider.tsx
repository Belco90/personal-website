import { ScriptOnce } from '@tanstack/react-router'
import { createClientOnlyFn, createIsomorphicFn } from '@tanstack/react-start'
import { createContext, use, useEffect, useState } from 'react'

import type { ReactNode } from 'react'

const THEME_KEY = 'theme-mode'
const THEME_MODES = ['light', 'dark', 'system'] as const
export type ThemeMode = (typeof THEME_MODES)[number]
type ResolvedTheme = 'light' | 'dark'

// Utils

const validateThemeMode = (theme: unknown): theme is ThemeMode => {
	return (
		typeof theme === 'string' &&
		(THEME_MODES as ReadonlyArray<string>).includes(theme)
	)
}

const getStoredThemeMode = createIsomorphicFn()
	.server((): ThemeMode => 'system')
	.client((): ThemeMode => {
		try {
			const storedTheme = localStorage.getItem(THEME_KEY)
			if (validateThemeMode(storedTheme)) {
				return storedTheme
			}
			throw new Error('Invalid or empty theme')
		} catch {
			return 'system'
		}
	})

const setStoredThemeMode = createClientOnlyFn((theme: ThemeMode) => {
	try {
		if (!validateThemeMode(theme)) {
			throw new Error('Invalid theme mode')
		}
		localStorage.setItem(THEME_KEY, theme)
	} catch {
		/* empty */
	}
})

const getSystemTheme = createIsomorphicFn()
	.server((): ResolvedTheme => 'light')
	.client((): ResolvedTheme => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})

const updateThemeAttributes = createClientOnlyFn((themeMode: ThemeMode) => {
	const root = document.documentElement

	// CSS class
	root.classList.remove(...THEME_MODES)
	const newTheme = themeMode === 'system' ? getSystemTheme() : themeMode
	root.classList.add(newTheme)

	if (themeMode === 'system') {
		root.classList.add('system')
	}

	// data-theme attribute
	root.setAttribute('data-theme', newTheme)

	// Style color-scheme
	root.style.setProperty('color-scheme', newTheme)
})

const setupPreferredListener = createClientOnlyFn(() => {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
	const handler = () => updateThemeAttributes('system')

	mediaQuery.addEventListener('change', handler)
	return () => mediaQuery.removeEventListener('change', handler)
})

// Everything must be hardcoded inside this script
const themeDetectorScript = (function () {
	function themeFn() {
		const root = document.documentElement
		try {
			const storedTheme = localStorage.getItem('theme-mode') || 'system'
			const validTheme = ['light', 'dark', 'system'].includes(storedTheme)
				? storedTheme
				: 'system'

			if (validTheme === 'system') {
				const autoTheme = window.matchMedia('(prefers-color-scheme: dark)')
					.matches
					? 'dark'
					: 'light'
				root.classList.add(autoTheme, 'system')
				root.setAttribute('data-theme', autoTheme)
				root.style.setProperty('color-scheme', autoTheme)
			} else {
				root.classList.add(validTheme)
				root.setAttribute('data-theme', validTheme)
				root.style.setProperty('color-scheme', validTheme)
			}
		} catch {
			const autoTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'
			root.classList.add(autoTheme, 'system')
			root.setAttribute('data-theme', autoTheme)
			root.style.setProperty('color-scheme', autoTheme)
		}
	}
	return `(${themeFn.toString()})();`
})()

// ThemeProvider component

interface ThemeContextProps {
	themeMode: ThemeMode
	resolvedTheme: ResolvedTheme
	setTheme: (theme: ThemeMode) => void
}

interface ThemeProviderProps {
	children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode)

	useEffect(() => {
		if (themeMode !== 'system') return
		return setupPreferredListener()
	}, [themeMode])

	const resolvedTheme = themeMode === 'system' ? getSystemTheme() : themeMode

	const setTheme = (newTheme: ThemeMode) => {
		setThemeMode(newTheme)
		setStoredThemeMode(newTheme)
		updateThemeAttributes(newTheme)
	}

	return (
		<ThemeContext value={{ themeMode, resolvedTheme, setTheme }}>
			<ScriptOnce children={themeDetectorScript} />
			{children}
		</ThemeContext>
	)
}

// useTheme hook
export const useTheme = () => {
	const context = use(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
