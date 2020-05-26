import { theme } from '@chakra-ui/core';

const primaryColor = {
  50: '#fae9ff',
  100: '#e3c1f2',
  200: '#cb99e6',
  300: '#b271db',
  400: '#a549cf',
  500: '#9530b6',
  600: '#7b248e',
  700: '#5e1967',
  800: '#3d0f3f',
  900: '#190317',
};

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
};

export default customTheme;
