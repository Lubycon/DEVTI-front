import React from 'react';
import { Box, BoxProps } from 'rebass';
import { colors } from 'styles/theme';

type ExcludeBoxProps = Omit<BoxProps, 'width' | 'height'>;

export interface CircleProps extends ExcludeBoxProps {
  width?: number | string;
  isActive?: boolean;
}

const Circle = ({ width, isActive, children, ...props }: Partial<CircleProps>) => {
  const sx = !isActive
    ? {
        border: '1px solid',
        borderColor: '#3A3D3F',
        bg: '#3A3D3F',
      }
    : {
        border: '1px solid',
        borderColor: colors.purple,
        bg: colors.purple,
      };
  return (
    <Box variant="circle" {...props} width={width} height={width} sx={sx}>
      {children}
    </Box>
  );
};
export default Circle;
