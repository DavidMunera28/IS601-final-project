import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#EFEDE9',
        color: '#000000',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '30px',
      },
    },
  },
});

export default theme;