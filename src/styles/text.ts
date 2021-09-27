const text = {
  default: {
    fontWeight: 'normal',
    // whiteSpace: 'pre-wrap',
  },
  primary: {
    variant: 'text.default',
  },
  title: {
    variant: 'text.default',
    color: 'gray.6',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: '60px',
    fontWeight: 'bold',
    '@media screen and (max-width: 64em)': {
      fontSize: 30,
      lineHeight: '38px',
    },
  },
  description: {
    variant: 'text.default',
    color: 'gray.3',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: '26px',
    '@media screen and (max-width: 64em)': {
      fontSize: 18,
      lineHeight: '22px',
      whiteSpace: 'normal',
    },
  },
  underline: {
    fontSize: 14,
    textDecorationLine: 'underline',
    cursor: 'pointer',
    color: 'gray.6',
    '@media screen and (max-width: 64em)': {
      fontSize: 14,
      lineHeight: '22px',
      whiteSpace: 'normal',
    },
  },
};
export default text;
