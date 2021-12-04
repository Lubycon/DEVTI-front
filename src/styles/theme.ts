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
  grey300: '#1d2022',
  grey400: '#353c40',
  grey800: '#121517',
};

const highLightColors = {
  red: '#E15A60',
  yellow: '#FAC863',
  blue: '#6699CC',
  green: '#99C794',
};

export const colors = {
  ...greyColors,
  ...highLightColors,

  background: greyColors.grey800,
  backgroundHighLight: greyColors.grey300,
  backgroundLight: greyColors.grey400,

  fontDefault: greyColors.grey200,
};

export const fontSize = {
  t1: 24,
  t2: 18,
  t3: 15,
  t4: 13,
};

export const margin = {
  default: '24px',
};

export default theme;
