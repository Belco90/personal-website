import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	'html, body': { height: '100%' },
	'h1, h2, h3, h4, h5, h6': {
		textStyle: 'heading',
	},
})
