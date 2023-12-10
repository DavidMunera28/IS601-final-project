import { extendTheme } from '@chakra-ui/react';

const colors = {
    card: '#FFFFFF',
    text: '#000000',
    primarybg: '#EFEDE9',
    secondarybg: '#EFE9DC',
    accentbg: '#EBDAB7',
    button: '#373737',
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: colors.primarybg,
        color: colors.text,
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '30px',
      },
    },
  },
});

export default theme;