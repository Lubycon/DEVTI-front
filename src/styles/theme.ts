import buttons from './buttons';
import forms from './forms';
import text from './text';
import variants from './variants';

// @deprecated use below colors
const theme = {
  colors: {
    white: '#ffffff',
    gray: {
      1: '#f8f8f8',
      2: '#efefef',
      3: '#d1d1d1',
      5: '#9d9d9d',
      4: '#828282',
      6: '#333333',
    },
    primary: '#1e5ffe',
    blue: {
      0: '#dee7fc',
      1: '#f4f8fb',
    },
  },
  variants,
  buttons,
  text,
  forms,
};

const greyColors = {
  grey100: '#EFEFEF',
  grey200: '#BBBBBB',
  grey300: '#454545',
  // g3: '#3A3D3F',
  // g3: '#353C40',
  grey800: '#121517',
};

export const colors = {
  ...greyColors,
  background: greyColors.grey800,
  fontDefault: greyColors.grey200,
};

export const fontSize = {
  t1: 24,
  t2: 18,
  t3: 15,
};

export const margin = {
  default: '24px',
};

export default theme;
