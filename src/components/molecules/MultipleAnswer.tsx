import React, { useState } from 'react';
import { Box, Flex, FlexProps } from 'rebass';

import CircleWithText from './CircleWithText';

import Circle from '~atoms/Circle';
import { AnswerType, OmitAnswerInId, PresetModel } from '~models/Question';

interface MultipleProps extends FlexProps {
  presets: PresetModel[];
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const Multiple = ({ onAnswerClick, presets, ...props }: MultipleProps) => {
  const [isActives, setIsActives] = useState([false, false, false, false]);

  const handleClick = (value: number) => () => {
    const { label, ...preset } = presets[value];
    onAnswerClick({ answerType: AnswerType.Gage, ...preset });
    setIsActives([...isActives.map((_, i) => value === i)]);
  };

  return (
    <Flex flex={1} flexDirection="column" justifyContent="space-between" alignItems="center" {...props}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <CircleWithText isActive={isActives[0]} onClick={handleClick(0)} text="아니다" />
        <Box width={32} height={32}>
          <Circle isActive={isActives[1]} onClick={handleClick(1)} width={22} />
        </Box>
        <Box width={32} height={32}>
          <Circle isActive={isActives[2]} onClick={handleClick(2)} width={22} />
        </Box>
        <CircleWithText isActive={isActives[3]} onClick={handleClick(3)} text="그렇다" />
      </Flex>
    </Flex>
  );
};

export default Multiple;
