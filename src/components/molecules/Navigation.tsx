import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { Button, Flex, Text } from 'rebass';

import useScrollTo from '../../hooks/useScrollTo';

const Navigation = () => {
  const ref = useRef<HTMLElement>();

  const { handleExecuteScroll } = useScrollTo('test');

  const { data: isMobile } = useQuery<boolean>('isMobile');

  const handleScroll = () => {
    let lastScrollTop = 0;
    const checkScrolLDirection = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const nav = ref.current;
      if (nav) {
        if (st > lastScrollTop) {
          nav.style.backgroundColor = 'white';
          if (!isMobile) nav.style.padding = '0 40px';
        } else {
          nav.style.backgroundColor = 'inherit';
          if (!isMobile) nav.style.padding = '0 140px';
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
