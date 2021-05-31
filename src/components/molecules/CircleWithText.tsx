import React, { isValidElement, ReactNode } from 'react';
import { Flex, Text } from 'rebass';

import Circle, { CircleProps } from '~atoms/Circle';

interface CircleWithTextProps extends CircleProps {
  text: ReactNode;
}

const CircleWithText = ({ text, isActive, onClick, ...props }: CircleWithTextProps) => (
  <Flex variant="verticalCentralCenter" sx={{ position: 'relative' }}>
    {isValidElement(text) ? (
      text
    ) : (
      <Text fontSize={14} color="gray.5" mb={18} sx={{ position: 'absolute', bottom: 30 }}>
        {text}
      </Text>
    )}
    <Circle isActive={isActive} onClick={onClick} {...props} />
  </Flex>
);

export default CircleWithText;
