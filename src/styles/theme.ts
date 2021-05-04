import buttons from './buttons';
import forms from './forms';
import text from './text';

const theme = {
  colors: {
    white: '#ffffff',
    gray: {
      0: '#f5f5f5',
      1: '#e0e0e0',
      2: '#dddddd',
      3: '#828282',
      5: '#666666',
      6: '#333333',
    },
    blue: {
      0: '#1e5ffe',
      1: '#EEF3FD',
    },
  },
  variants: {
    screen: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'space-between',
      '> :is(div, form):nth-of-type(2)': {
        width: 780,
      },
      '@media screen and (max-width: 64em)': {
        px: 3,
        pt: 116,
        overflowX: 'hidden',
        '> :is(div, form):nth-of-type(2)': {
          width: '100%',
        },
      },
    },
    whiteScreen: {
      variant: 'variants.screen',
      bg: 'white',
    },
    grayScreen: {
      variant: 'variants.screen',
      bg: '#f4f8fB',
    },
    blueScreen: {
      variant: 'variants.screen',
      bg: 'blue.0',
    },
    navigation: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 140,
      height: 80,
      width: '100%',
      '@media screen and (max-width: 64em)': {
        px: 28,
      },
    },
    thumbnail: {
      borderRadius: '50%',
    },
    textCard: {
      justifyContent: 'center',
      fontSize: 22,
      bg: 'blue.1',
      width: '100%',
      '@media screen and (max-width: 64em)': {
        flexDirection: 'column',
        textAlign: 'center',
        height: 130,
        px: 40,
        fontSize: 18,
        '> *:nth-of-type(1)': {
          mb: 10,
        },
      },
    },
  },
  buttons,
  text,
  forms,
};

export default theme;
