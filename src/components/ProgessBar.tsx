import { isValidElement, PropsWithChildren, ReactNode } from 'react';
import { Flex, Text } from 'rebass';

interface Props {
  left?: ReactNode;
  right?: ReactNode;
}

const ProgessBar = ({ left, right, children }: PropsWithChildren<Props>) => (
  <Flex flex={1} flexDirection="column">
    <Flex flex={1} mb={3} justifyContent="space-between" alignItems="center">
      {left}
      {isValidElement(right) ? right : <Text>{right}</Text>}
    </Flex>
    {children}
  </Flex>
);

export default ProgessBar;
