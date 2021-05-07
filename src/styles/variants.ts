const variants = {
  screen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'space-between',
    scrollBehavior: 'smooth',
    wordBreak: 'keep-all',
    '> :is(div, form):nth-of-type(2)': {
      width: 780,
    },
    '@media screen and (max-width: 64em)': {
      px: 3,
      pt: 116,
      height: 896,
      overflow: 'hidden',
      '> :is(div, form):nth-of-type(2)': {
        width: '100%',
      },
    },
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
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 140,
    height: 80,
    width: '100%',
    transition: '0.5s',
    zIndex: 999,
    '@media screen and (max-width: 64em)': {
      px: 28,
      '> button': {
        display: 'none',
      },
    },
  },
  thumbnail: {
    borderRadius: '50%',
  },
  textCard: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    height: 110,
    bg: 'blue.1',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      flexDirection: 'column',
      textAlign: 'center',
      height: 130,
      px: 40,
      fontSize: 18,
      '> *:nth-of-type(1)': {
        mb: 10,
      },
    },
  },
  verticalCentralCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalCentralCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalBorderLine: {
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'gray.2',
    py: 3,
  },
  dimmer: {
    backgroundColor: 'black',
    opacity: 0.2,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  modal: {
    position: 'fixed',
    width: 320,
    height: 214,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    zIndex: 1000,
  },
};
export default variants;
