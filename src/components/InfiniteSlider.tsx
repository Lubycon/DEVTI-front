import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren, Children } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

const flow = (count: number) => keyframes`
100% { transform:translateX(calc(140px * ${count}));  }
`;

const Barrier = styled(Box)`
  overflow: hidden;
  position: relative;
`;

const Lane = styled(Flex)<{ count: number }>`
  width: ${({ count }) => `calc(140 * ${count} * 2)`};
`;

const Item = styled(Box)<{ count: number; duration?: number }>`
  width: max-content;
  animation: ${({ count }) => flow(count)} ${({ duration }) => `${duration ? `${duration}s` : '25s'}`} linear infinite;
`;

interface Props extends BoxProps {
  duration?: number;
}

const InfiniteSlider = ({ children: childrens, duration, ...props }: PropsWithChildren<Props>) => {
  const childrenCount = Children.count(childrens);

  return (
    <Box {...props}>
      <Barrier>
        <Lane count={childrenCount}>
          {Array.from({ length: 2 }).map(() =>
            Children.map(childrens, (children) => (
              <Item count={childrenCount} duration={duration}>
                {children}
              </Item>
            ))
          )}
        </Lane>
      </Barrier>
    </Box>
  );
};

export default InfiniteSlider;
