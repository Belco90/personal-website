import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'

const primaryColor = {
	50: '#eaf7f0',
	100: '#cfe2d8',
	200: '#b1cebc',
	300: '#93bb9f',
	400: '#75a881',
	500: '#5b8e65',
	600: '#476f4b',
	700: '#325033',
	800: '#1e301d',
	900: '#071105',
}

const theme = extendTheme({
	config: {
		useSystemColorMode: true,
	},
	colors: {
		primary: primaryColor,
	},
	fonts: {
		heading: 'var(--font-rubik)',
		body: 'var(--font-karla)',
	},
	styles: {
		global: {
			'html, body, #__next': { height: '100%' },
		},
	},
	components: {
		Heading: {
			variants: {
				gradient: (props: Dict) => {
					return {
						bgGradient: mode(
							'linear(to-br, primary.400, primary.700)',
							'linear(to-br, primary.200, primary.400)',
						)(props),
						bgClip: 'text',
					}
				},
			},
		},
	},
})

export { theme }
