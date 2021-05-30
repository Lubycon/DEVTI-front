import React, { useState } from 'react';
import { Flex, FlexProps } from 'rebass';

import CircleWithText from './CircleWithText';

import Circle from '~atoms/Circle';

interface MultipleProps extends FlexProps {
  onAnswerClick: (value: number, type: string) => void;
}

const Multiple = ({ onAnswerClick, ...props }: MultipleProps) => {
  const [isActivations, setIsActivations] = useState([false, false, false, false, false]);

  const handleClick = (value: number) => () => {
    onAnswerClick(value, 'gage');
    const toggleIsActivation = isActivations.map((_, i) => value === i);
    setIsActivations(toggleIsActivation);
  };

  return (
    <Flex flex={1} flexDirection="column" justifyContent="space-between" alignItems="center" {...props}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <CircleWithText isActivation={isActivations[0]} onClick={handleClick(0)} text="아니다" />
        <Circle isActivation={isActivations[1]} onClick={handleClick(1)} width={22} />
        <CircleWithText isActivation={isActivations[2]} onClick={handleClick(2)} text="보통이다" width={16} />
        <Circle isActivation={isActivations[3]} onClick={handleClick(3)} width={22} />
        <CircleWithText isActivation={isActivations[4]} onClick={handleClick(4)} text="그렇다" />
      </Flex>
    </Flex>
  );
};

export default Multiple;
