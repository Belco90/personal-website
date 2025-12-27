import { defineConfig } from '@pandacss/dev'

import { animationStyles } from '#/theme/animation-styles'
import { green } from '#/theme/colors/green'
import { lime } from '#/theme/colors/lime'
import { olive } from '#/theme/colors/olive'
import { red } from '#/theme/colors/red'
import { conditions } from '#/theme/conditions'
import { globalCss } from '#/theme/global-css'
import { keyframes } from '#/theme/keyframes'
import { layerStyles } from '#/theme/layer-styles'
import { slotRecipes, recipes } from '#/theme/recipes'
import { textStyles } from '#/theme/text-styles'
import { colors } from '#/theme/tokens/colors'
import { durations } from '#/theme/tokens/durations'
import { fonts } from '#/theme/tokens/fonts'
import { shadows } from '#/theme/tokens/shadows'
import { zIndex } from '#/theme/tokens/z-index'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'react',
	globalCss: globalCss,
	conditions,

	theme: {
		extend: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			animationStyles,
			recipes: recipes,
			slotRecipes: slotRecipes,
			keyframes: keyframes,
			layerStyles: layerStyles,
			textStyles: textStyles,

			tokens: {
				colors: colors,
				durations: durations,
				fonts: fonts,
				zIndex: zIndex,
			},

			semanticTokens: {
				gradients: {
					heading: {
						value: {
							base: 'linear-gradient(to bottom right, {colors.accent.5}, {colors.accent.8})',
							_dark:
								'linear-gradient(to bottom right, {colors.accent.3}, {colors.accent.5})',
						},
					},
				},
				colors: {
					fg: {
						default: {
							value: {
								_light: '{colors.gray.12}',
								_dark: '{colors.gray.12}',
							},
						},

						muted: {
							value: {
								_light: '{colors.gray.11}',
								_dark: '{colors.gray.11}',
							},
						},

						subtle: {
							value: {
								_light: '{colors.gray.10}',
								_dark: '{colors.gray.10}',
							},
						},
					},

					border: {
						value: {
							_light: '{colors.gray.4}',
							_dark: '{colors.gray.4}',
						},
					},

					error: {
						value: {
							_light: '{colors.red.9}',
							_dark: '{colors.red.9}',
						},
					},

					lime: lime,
					gray: olive,
					red: red,
					green: green,
					accent: lime,
				},

				shadows: shadows,

				radii: {
					l1: {
						value: '{radii.xs}',
					},

					l2: {
						value: '{radii.sm}',
					},

					l3: {
						value: '{radii.md}',
					},
				},
			},
		},
	},
})
