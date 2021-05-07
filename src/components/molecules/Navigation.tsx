import { useEffect, useRef } from 'react';
import { Button, Flex, Text } from 'rebass';

import useScrollTo from '../../hooks/useScrollTo';

const Navigation = () => {
  const ref = useRef<HTMLElement>();

  const { handleExecuteScroll } = useScrollTo('test');

  const handleScroll = () => {
    let lastScrollTop = 0;
    const checkScrolLDirection = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const nav = ref.current;
      if (nav) {
        if (st > lastScrollTop) {
          nav.style.backgroundColor = 'white';
          nav.style.padding = '0 40px';
        } else {
          nav.style.padding = '0 140px';
          nav.style.backgroundColor = 'inherit';
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    checkScrolLDirection();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex ref={ref} as="nav" variant="navigation">
      <Text fontWeight={800} fontSize="30px" flex={2} color="blue.0">
        DEVTI
      </Text>
      <Button variant="primary" fontWeight={700} onClick={handleExecuteScroll}>
        검사하기
      </Button>
    </Flex>
  );
};

export default Navigation;
