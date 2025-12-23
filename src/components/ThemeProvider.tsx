import { ScriptOnce } from '@tanstack/react-router'
import { createClientOnlyFn, createIsomorphicFn } from '@tanstack/react-start'
import { createContext, useContext, useEffect, useState } from 'react'
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

const updateThemeClass = createClientOnlyFn((themeMode: ThemeMode) => {
	const root = document.documentElement
	root.classList.remove(...THEME_MODES)
	const newTheme = themeMode === 'system' ? getSystemTheme() : themeMode
	root.classList.add(newTheme)

	if (themeMode === 'system') {
		root.classList.add('system')
	}
})

const setupPreferredListener = createClientOnlyFn(() => {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
	const handler = () => updateThemeClass('system')

	mediaQuery.addEventListener('change', handler)
	return () => mediaQuery.removeEventListener('change', handler)
})

// Everything must be hardcoded inside this script
const themeDetectorScript = (function () {
	function themeFn() {
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
				document.documentElement.classList.add(autoTheme, 'system')
			} else {
				document.documentElement.classList.add(validTheme)
			}
		} catch {
			const autoTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'
			document.documentElement.classList.add(autoTheme, 'system')
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
		updateThemeClass(newTheme)
	}

	return (
		<ThemeContext.Provider value={{ themeMode, resolvedTheme, setTheme }}>
			<ScriptOnce children={themeDetectorScript} />
			{children}
		</ThemeContext.Provider>
	)
}

// useTheme hook
export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
