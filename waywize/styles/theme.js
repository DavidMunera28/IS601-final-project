import { extendTheme } from '@chakra-ui/react';

const colors = {
    card: '#FFFFFF',
    text: '#000000',
    primarybg: '#EFEDE9',
    secondarybg: '#EFE9DC',
    accentbg: '#EBDAB7',
    button: '#373737',
}

const sizes = {
    huge: '48px',
    large: '32px',
    medium: '24px',
    small: '20px',
    tiny: '16px',
}

const defaults = {
    shadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    genradius: '20px',
    btnradius: '10px',
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: colors.primarybg,
        color: colors.text,
        fontSize: sizes.medium,
        fontWeight: '400',
        lineHeight: '30px',
      },
    },
  },
});

export default theme;