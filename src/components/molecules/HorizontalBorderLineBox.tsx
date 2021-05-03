import { PropsWithChildren } from 'react';
import { Flex, FlexProps } from 'rebass';

const HorizontalBorderLineBox = ({ children, ...props }: PropsWithChildren<FlexProps>) => (
  <Flex
    {...props}
    flexDirection="column"
    alignItems="center"
    sx={{
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'gray.2',
      py: 3,
    }}
  >
    {children}
  </Flex>
);

export default HorizontalBorderLineBox;
