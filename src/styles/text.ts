const text = {
  default: {
    fontWeight: 'normal',
    whiteSpace: 'pre-wrap',
  },
  title: {
    variant: 'text.default',
    color: 'gray.6',
    fontSize: 45,
    textAlign: 'center',
    '@media screen and (max-width: 64em)': {
      fontSize: 30,
    },
  },
  description: {
    variant: 'text.default',
    color: 'gray.3',
    fontSize: 20,
    textAlign: 'center',
    '@media screen and (max-width: 64em)': {
      fontSize: 18,
      whiteSpace: 'normal',
    },
  },
};
export default text;
