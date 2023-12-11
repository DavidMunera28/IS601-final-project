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
          p: '71px 139px 97px 148px',
          mt: '82px',
          bg: colors.accentbg,
          fontSize: sizes.small,
          fontWeight: weights.verythick,
          justifyContent: 'space-between',
        },
        'footer a': {
          _hover: {
            color: colors.link,
            transition: defaults.transition,
          },
        },
        'footer .internal-links ul': {
          display: 'flex',
        },
        'footer .internal-links li': {
          mr: '143px',
        },
        'footer .social-links': {
          mr: '143px',
        },
        'footer .social-links ul': {
          display: 'flex',
          justifyContent: 'space-around',
          m: '40px auto 0px auto',
          fontSize: sizes.large,
          w: '192px',
        },
        'footer .subscribe-button': {
          mt: '40px',
          bg: colors.button,
          color: colors.card,
          fontSize: sizes.tiny,
          borderRadius: defaults.btnradius,
          p: '0px 24px',
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          },
        },
        '.hero-outer': {
          width: '1339px',
          m: '0px 50px',
        },
        '.hero-inner': {
          w: '960px',
          h: '555px',
          m: '77px auto',
        },
        '.hero': {
          flexDirection: 'row-reverse',
        },
        '.hero-img': {
          minWidth: 'fit-content',
        },
        '.hero-img img': {
          w: '516px',
          h: '555px',
        },
        '.hero-text': {
          pt: '51px',
          pl: '62px',
        },
        '.hero h1': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
        },
        '.hero p': {
          lineHeight: '40px',
          pt: '33px',
          pb: '76px',
        },
        '.hero .hero-button': {
          bg: colors.button,
          color: colors.card,
          textSize: sizes.small,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          p: '7px 39px',
          borderRadius: defaults.btnradius,
        },
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