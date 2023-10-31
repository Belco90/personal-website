import { defineConfig } from '@pandacss/dev'

import { colors } from '@/theme/colors'
import { globalCss } from '@/theme/global-css'
import { textStyles } from '@/theme/text-styles'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/app/**/*.{js,jsx,ts,tsx}',
	],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			// Enable dark theme
			dark: '.dark &, [data-theme="dark"] &',
			light: '.light &',
		},
	},

	// Useful for theme customization
	theme: {
		extend: {
			textStyles,
			tokens: {
				colors,
				fonts: {
					heading: { value: 'var(--font-rubik)' },
					body: { value: 'var(--font-karla)' },
				},
				// TODO: zIndex
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'react',
	jsxFactory: 'panda',
	globalCss,
})
