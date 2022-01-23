import { extendTheme } from '@chakra-ui/react'

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

const secondaryColor = {
  50: '#fdecf8',
  100: '#e5cedc',
  200: '#cfb0c2',
  300: '#ba92a8',
  400: '#a5738f',
  500: '#8c5a75',
  600: '#6e465b',
  700: '#503142',
  800: '#321c28',
  900: '#180610',
}

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
  fonts: {
    heading: '"Rubik", sans-serif;',
    body: '"Karla", sans-serif;',
  },
  styles: {
    global: {
      'html, body, #__next': { height: '100%' },
    },
  },
})

export { theme }
