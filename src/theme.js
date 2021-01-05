import { theme } from '@chakra-ui/core'

const primaryColor = {
  50: '#ffefdb',
  100: '#ffd5ae',
  200: '#ffbb7e',
  300: '#ff9f4c',
  400: '#ff841a',
  500: '#e66b00',
  600: '#b45300',
  700: '#813a00',
  800: '#4f2300',
  900: '#200900',
}

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: primaryColor,
  },
  fonts: {
    ...theme.fonts,
    heading: 'Open Sans, sans-serif;',
  },
}

export default customTheme
