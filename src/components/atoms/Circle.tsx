import React from 'react';
import { Box, BoxProps } from 'rebass';

type ExcludeBoxProps = Omit<BoxProps, 'width' | 'height'>;

export interface CircleProps extends ExcludeBoxProps {
  width?: number | string;
  isActivation: boolean;
}

const Circle = ({ onClick, width, isActivation, ...props }: Partial<CircleProps>) => {
  const sx = !isActivation
    ? {
        border: '1px solid',
        borderColor: 'gray.3',
        bg: 'white',
      }
    : undefined;
  return <Box variant="circle" {...props} onClick={onClick} width={width} height={width} sx={sx} />;
};
export default Circle;
