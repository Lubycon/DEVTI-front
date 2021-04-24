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
  },
  variants: {
    screen: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    thumbnail: {
      borderRadius: '50%',
    },
    grayScreen: {
      variant: 'variants.screen',
      bg: '#f4f8fB',
    },
  },
  buttons,
  text,
  forms,
};

export default theme;
