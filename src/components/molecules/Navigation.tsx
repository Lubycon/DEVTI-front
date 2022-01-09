import { useRef } from 'react';
import { Flex } from 'rebass';

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation = ({ children }: NavigationProps) => {
  const ref = useRef<HTMLElement>();

  return (
    <Flex ref={ref} as="nav" variant="navigation">
      {children}
    </Flex>
  );
};

export default Navigation;
