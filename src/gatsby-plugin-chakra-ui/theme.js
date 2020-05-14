import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: 'Open Sans, sans-serif;',
  },
};

export default customTheme;
