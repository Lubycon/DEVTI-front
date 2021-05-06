import { Box, BoxProps } from 'rebass';

interface IconProps extends BoxProps {
  Component: string;
}

const Icon = ({ Component, ...props }: IconProps) => (
  <Box {...props}>
    <Component />
  </Box>
);

export default Icon;
