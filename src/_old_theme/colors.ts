import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	current: { value: 'currentColor' },
	primary: {
		50: { value: '#eaf7f0' },
		100: { value: '#cfe2d8' },
		200: { value: '#b1cebc' },
		300: { value: '#93bb9f' },
		400: { value: '#75a881' },
		500: { value: '#5b8e65' },
		600: { value: '#476f4b' },
		700: { value: '#325033' },
		800: { value: '#1e301d' },
		900: { value: '#071105' },
	},
})
