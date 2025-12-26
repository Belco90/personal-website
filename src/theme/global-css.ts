export const globalCss = {
	extend: {
		'*': {
			'--global-color-border': 'colors.border',
			'--global-color-placeholder': 'colors.fg.subtle',
			'--global-color-selection': 'colors.colorPalette.subtle.bg',
			'--global-color-focus-ring': 'colors.colorPalette.solid.bg',
		},
		html: {
			colorPalette: 'gray',
		},
		body: {
			background: 'canvas',
			color: 'fg.default',
		},

		'html, body': { height: '100%' },
		'h1, h2, h3, h4, h5, h6': {
			textStyle: 'heading',
		},
	},
}
