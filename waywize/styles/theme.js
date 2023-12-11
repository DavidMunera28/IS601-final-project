import { extendTheme } from '@chakra-ui/react';

const colors = {
    card: '#FFFFFF',
    text: '#000000',
    primarybg: '#EFEDE9',
    secondarybg: '#EFE9DC',
    accentbg: '#EBDAB7',
    button: '#373737',
    link: '#00C2FF',
    alert: '#E53E3E',
}

const sizes = {
    huge: '48px',
    large: '32px',
    medium: '24px',
    small: '20px',
    tiny: '16px',
}

const weights = {
    verythick: '700',
    thick: '500',
    normal: '400',
    thin: '300',
}

const defaults = {
    shadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    genradius: '20px',
    btnradius: '10px',
    font: 'Space Grotesk, sans-serif',
    transition: '400ms',
}

const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: colors.primarybg,
          fontFamily: defaults.font,
          color: colors.text,
          fontSize: sizes.medium,
          fontWeight: weights.normal,
          lineHeight: '30px',
        },
        nav: {
          display: 'flex',
          m: '37px 50px 41px 50px',
        },
        'nav .logo': {
          fontSize: sizes.large,
          fontWeight: weights.verythick,
        },
        'nav li': {
          ml: '93px',
          textTransform: 'uppercase',
        },
        'nav a': {
          _hover: {
            color: colors.link,
            transition: defaults.transition,
          },
        },
        footer: {
          display: 'flex',
        },
        'footer .internal-links': {
          display: 'flex',
        },
        'footer .social-links ul': {
          display: 'flex',
        }
      },
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: defaults.font,
        },
      },
    },
  });
  
  export default theme;