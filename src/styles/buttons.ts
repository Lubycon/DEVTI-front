const buttons = {
  default: {
    px: 4,
    py: 2,
    cursor: 'pointer',
    outline: 'none',
    ':active, :focus': {
      outline: 'none',
    },
  },
  dark: {
    variant: 'buttons.default',
    bg: 'gray.6',
    ':hover, :focus': {
      bg: 'gray.6',
    },
  },
  primary: {
    variant: 'buttons.default',
    bg: 'primary',
    ':hover, :focus': {
      bg: 'primary',
    },
  },
  white: {
    variant: 'buttons.default',
    bg: 'white',
    color: 'primary',
  },
};

export default buttons;
