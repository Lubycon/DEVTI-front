import { useEffect, useRef } from 'react';
import { Flex, FlexProps } from 'rebass';

interface NavigationProps extends FlexProps {
  children: React.ReactNode;
}

const Navigation = ({ children, ...props }: NavigationProps) => {
  const ref = useRef<HTMLElement>();

  const handleScroll = () => {
    let lastScrollTop = 0;
    const checkScrolLDirection = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const nav = ref.current;
      if (nav) {
        if (st > lastScrollTop) {
          nav.style.backgroundColor = 'white';
        } else {
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
    <Flex ref={ref} as="nav" variant="navigation" {...props}>
      {children}
    </Flex>
  );
};

export default Navigation;
