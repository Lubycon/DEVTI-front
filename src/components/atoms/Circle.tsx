import React from 'react';
import { Box, BoxProps } from 'rebass';

type ExcludeBoxProps = Omit<BoxProps, 'width' | 'height'>;

export interface CircleProps extends ExcludeBoxProps {
  width?: number | string;
  isActive: boolean;
}

const Circle = ({ onClick, width, isActive, ...props }: Partial<CircleProps>) => {
  const sx = !isActive
    ? {
        border: '1px solid',
        borderColor: 'gray.3',
        bg: 'white',
      }
    : undefined;
  return <Box variant="circle" {...props} onClick={onClick} width={width} height={width} sx={sx} />;
};
export default Circle;
