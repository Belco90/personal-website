import { defineRecipe } from '@pandacss/dev'

export const heading = defineRecipe({
	className: 'heading',
	base: {
		fontWeight: 'bold',
		fontSize: '4xl',
	},
})
