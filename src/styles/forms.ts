const forms = {
  default: {
    bg: 'white',
  },
  textarea: {
    variant: 'forms.default',
    border: '1px solid',
    borderColor: 'gray.1',
    outline: 'none',
    resize: 'none',
  },
  input: {
    variant: 'forms.default',
    border: '1px solid',
    borderColor: 'gray.1',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  email_dropdown: {
    variant: 'forms.default',
    right: '11px',
    width: '200px',
    borderColor: 'gray.1',
  },
};

export default forms;
