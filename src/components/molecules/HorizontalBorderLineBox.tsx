import { PropsWithChildren } from 'react';
import { Flex, FlexProps } from 'rebass';

const HorizontalBorderLineBox = ({ children, ...props }: PropsWithChildren<FlexProps>) => (
  <Flex {...props} variant="horizontalBorderLine" flexDirection="column" alignItems="center">
    {children}
  </Flex>
);

export default HorizontalBorderLineBox;
