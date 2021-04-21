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
  example: {
    variant: 'buttons.default',
    bg: 'dark.0',
    ':hover, :focus': {
      bg: 'dark.0',
    },
  },
};

export default buttons;
