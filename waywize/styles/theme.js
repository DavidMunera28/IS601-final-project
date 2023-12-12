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
          width: '1339px',
          m: '37px auto 41px auto',
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
          pt: '71px',
          pb: '97px',
          mt: '82px',
          bg: colors.accentbg,
          fontSize: sizes.small,
          fontWeight: weights.verythick,
          
        },
        'footer .footer-content': {
          justifyContent: 'space-around',
          w: '1339px',
          m: 'auto',
          pr: '139px',
          pl: '148px',
        },
        'footer a': {
          _hover: {
            color: colors.link,
            transition: defaults.transition,
          },
        },
        'footer .internal-links ul': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        'footer .internal-links li': {
          mr: '110px',
        },
        'footer .social-links': {
          mr: '110px',
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
          m: '0px auto',
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
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          }
        },
        '#subscribe': {
          width: '1339px',
          m: '0px auto',
          pl: '55px',
          pr: '34px',
        },
        '#subscribe .subscribe-text': {
          mr: '97px',
        },
        '#subscribe h2': {
          fontSize: sizes.huge,
          lineHeight: '100%',
        },
        '#subscribe .subscribe-subtext': {
          pt: '79px',
          pb: '86px',
        },
        '#subscribe .alert': {
          color: colors.alert,
        },
        '#subscribe input[type=email]': {
          mt: '22px',
          bg: colors.card,
          borderRadius: defaults.btnradius,
          boxShadow: defaults.shadow,
          p: '0px 12px',
          w: '438px',
          h: '40px',
        },
        '#subscribe h3': {
          textSize: sizes.large,
          lineHeight: '30px',
          textTransform: 'uppercase',
          pt: '56px',
        },
        '#subscribe .permissions-text': {
          pt: sizes.medium,
        },
        '#subscribe .subscribe-button': {
          bg: colors.button,
          color: colors.card,
          textSize: sizes.small,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          p: '7px 39px',
          mt: '30px',
          borderRadius: defaults.btnradius,
          _hover: {
            bg: colors.link,
            color: colors.text,
            transition: defaults.transition,
          }
        },
        '#subscribe .subscribe-img': {
          minWidth: 'fit-content',
        },
        '#subscribe .subscribe-img img': {
          w: '625px',
          borderRadius: defaults.genradius,
        },
        '.testimonials h2': {
          fontSize: sizes.huge,
          lineHeight: '100%',
          width: '440px',
          textAlign: 'center',
          m: 'auto',
        },
        '.testimonials .quotes': {
          mt: '76px',
          mr: 'auto',
          ml: 'auto',
          w: '1394px',
          justifyContent: 'space-around',
        },
        '.testimonials .quote': {
          bg: colors.accentbg,
          borderRadius: defaults.genradius,
          boxShadow: defaults.shadow,
          width: '420px',
          height: '414px',
          textAlign: 'center',
          p: '0px 22px 22px 22px'
        },
        '.testimonials .quote-portrait': {
          w: '119px',
          h: '119px',
          m: 'auto',
          position: 'relative',
          top: '-60px',
        },
        '.testimonials h3': {
          fontSize: sizes.medium,
          fontWeight: weights.verythick,
          lineHeight: '27.5px',
          mt: '10px',
          position: 'relative',
          top: '-60px',
        },
        '.testimonials h4': {
          fontSize: sizes.small,
          fontWeight: weights.thick,
          lineHeight: '27.5px',
          position: 'relative',
          top: '-60px',
        },
        '.testimonials p': {
          fontSize: sizes.small,
          lineHeight: '27.5px',
          mt: '18px',
          position: 'relative',
          top: '-60px',
        },
        '.overview-outer': {
          width: '1339px',
          m: '0px auto',
          borderRadius: '0px',
        },
        '.overview-inner': {
          w: '960px',
          h: '555px',
          m: '77px auto',
        },
        '.overview': {
          flexDirection: 'row-reverse',
        },
        '.overview-img': {
          minWidth: 'fit-content',
        },
        '.overview-img img': {
          w: '516px',
          h: '555px',
        },
        '.overview-text': {
          pt: '72px',
          pl: '62px',
        },
        '.overview h2': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
        },
        '.overview p': {
          lineHeight: '26px',
          pt: '53px',
        },
        '.people': {
          w: '1339px',
          m: 'auto',
        },
        '.people h2': {
          fontSize: sizes.huge,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people h3': {
          fontSize: sizes.large,
          fontWeight: weights.verythick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people h4': {
          fontSize: '26px',
          fontWeight: weights.thick,
          lineHeight: 'normal',
          textAlign: 'center',
        },
        '.people img': {
          w: '625px',
          h: '414px',
          borderRadius: defaults.genradius,
        },
        '.people p': {
          lineHeight: '27.5px',
          textAlign: 'center',
          w: '625px',
          mt: '43px',
        },
        '.people .person': {
          mt: '113px',
          justifyContent: 'space-between',
        },
        '.people .person:nth-of-type(2)': {
          flexDirection: 'row-reverse',
        },
        '.wwsf img': {
          w: '625px',
          h: '340px',
          borderRadius: defaults.genradius,
        }
      },
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: defaults.font,
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            width: sizes.medium,
            height: sizes.medium,
            borderColor: colors.text,
            mt: sizes.medium,
          },
          fontSize: sizes.medium,
        },
        sizes: {
          md: {
            label: {
              fontSize: sizes.medium,
              mt: sizes.medium,
            },
          },
        },
      },
    },
  });
  
  export default theme;