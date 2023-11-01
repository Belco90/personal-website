import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
	shadows: {
		'profile-picture-outer': {
			value:
				'rgba(91, 142, 101, 0.4) -5px 5px, rgba(91, 142, 101, 0.3) -10px 10px, rgba(91, 142, 101, 0.2) -15px 15px, rgba(91, 142, 101, 0.1) -20px 20px, rgba(91, 142, 101, 0.05) -25px 25px',
		},
		'profile-picture-inner': {
			value:
				'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
		},
		card: {
			value: {
				base: '0.2rem 0.2em {colors.primary.100}',
				_dark: '0.2rem 0.2em {colors.primary.600}',
			},
		},
	},
	durations: {
		'social-network': { value: '0.3s' },
	},
	gradients: {
		heading: {
			value: {
				base: 'linear-gradient(to bottom right, {colors.primary.400}, {colors.primary.700})',
				_dark:
					'linear-gradient(to bottom right, {colors.primary.200}, {colors.primary.400})',
			},
		},
	},
})
