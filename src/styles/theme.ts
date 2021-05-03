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
  },
  buttons,
  text,
  forms,
};

export default theme;
