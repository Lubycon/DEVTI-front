import React, { useState } from 'react';
import { Flex, FlexProps } from 'rebass';

import CircleWithText from './CircleWithText';

import Circle from '~atoms/Circle';
import { OmitAnswerInId, PresetModel } from '~models/questions';

interface MultipleProps extends FlexProps {
  presets: PresetModel[];
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const Multiple = ({ onAnswerClick, presets, ...props }: MultipleProps) => {
  const [isActives, setIsActives] = useState([false, false, false, false, false]);

  const handleClick = (value: number) => () => {
    const { label, ...preset } = presets[value];
    onAnswerClick({ answerType: 'GAGE', ...preset });
    setIsActives([...isActives.map((_, i) => value === i)]);
  };

  return (
    <Flex flex={1} flexDirection="column" justifyContent="space-between" alignItems="center" {...props}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <CircleWithText isActive={isActives[0]} onClick={handleClick(0)} text="아니다" />
        <Circle isActive={isActives[1]} onClick={handleClick(1)} width={22} />
        <CircleWithText isActive={isActives[2]} onClick={handleClick(2)} text="보통이다" width={16} />
        <Circle isActive={isActives[3]} onClick={handleClick(3)} width={22} />
        <CircleWithText isActive={isActives[4]} onClick={handleClick(4)} text="그렇다" />
      </Flex>
    </Flex>
  );
};

export default Multiple;
