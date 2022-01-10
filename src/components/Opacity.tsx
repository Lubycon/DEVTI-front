import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'rebass';

interface OpacityProps extends BoxProps {
  opacity: number;
}

const Opacity = forwardRef<HTMLDivElement, OpacityProps>(({ opacity, children, ...props }, ref) => (
  <Box
    ref={ref}
    role="button"
    style={{
      opacity,
      transition: 'opacity 0.5s ease',
    }}
    {...props}
  >
    {children}
  </Box>
));

Opacity.displayName = 'Opacity';

export default Opacity;
