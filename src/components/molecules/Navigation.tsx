import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { Flex } from 'rebass';

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation = ({ children }: NavigationProps) => {
  const { data: isMobile } = useQuery<boolean>('isMobile');
  const ref = useRef<HTMLElement>();
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
      {children}
    </Flex>
  );
};

export default Navigation;
