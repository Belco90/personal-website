import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
	heading: {
		value: {
			fontFamily: 'heading',
			fontWeight: 'bold',
			fontSize: '4xl',
		},
	},
	body: {
		value: {
			fontFamily: 'body',
		},
	},
})
