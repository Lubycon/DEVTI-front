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
}

export default buttons
