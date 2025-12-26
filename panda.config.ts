import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			// Enable dark theme
			dark: '.dark &, [data-theme="dark"] &',
			light: '.light &',
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'react',
})
