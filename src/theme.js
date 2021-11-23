import { extendTheme, theme } from '@chakra-ui/react'

const primaryColor = {
  50: '#eaf7f0',
  100: '#cfe2d8',
  200: '#b1cebe',
  300: '#93bba4',
  400: '#75a88b',
  500: '#5b8e72',
  600: '#476f58',
  700: '#32503f',
  800: '#1d3025',
  900: '#051109',
}

export default extendTheme({
  config: {
    useSystemColorMode: true,
  },
  colors: {
    primary: primaryColor,
    primaryAlt: theme.colors.yellow,
    secondary: theme.colors.purple,
    secondaryAlt: theme.colors.pink,
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
