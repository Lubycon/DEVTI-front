import styled from '@emotion/styled';
import List from 'components/List';
import Margin from 'components/Margin';
import React, { memo, useState } from 'react';
import { colors } from 'styles/theme';

import Circle from '~atoms/Circle';
import { AnswerType, OmitAnswerInId, PresetModel } from '~models/Question';

interface PresetProps {
  title: string;
  presets: PresetModel[];
  onPhaseClick: () => void;
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const isFirstOrLastIndex = (index: number, values: unknown[]) => index === 0 || index === values.length - 1;
const generateSize = (index: number, values: unknown[]) => (isFirstOrLastIndex(index, values) ? 'md' : 'sm');

const Gage = ({ title, presets, onPhaseClick, onAnswerClick }: PresetProps) => {
  const [isActives, setIsActives] = useState(() => presets.map(() => false));

  const handleClick = (i: number) => {
    setIsActives([...isActives.map((_, index) => i === index)]);
  };

  return (
    <Margin>
      <List title={title} highLightColor={colors.grey200}>
        <Wrapper>
          {presets.map(({ label, sequence, ...preset }, i) => (
            <List.Row
              key={label}
              onClick={() => {
                onAnswerClick({ answerType: AnswerType.Preset, sequence, ...preset });
                onPhaseClick();
                handleClick(i);
              }}
            >
              <Circle as="button" width={isFirstOrLastIndex(i, presets) ? 48 : 32} isActive={isActives[i]}>
                <CheckSvg size={generateSize(i, presets)} />
              </Circle>
            </List.Row>
          ))}
        </Wrapper>
      </List>
    </Margin>
  );
};

const CheckSvg = ({ size }: { size: 'sm' | 'md' }) => {
  const sizeMap = {
    sm: {
      width: 20,
      height: 25,
    },
    md: {
      width: 29,
      height: 22,
    },
  };

  return (
    <svg {...sizeMap[size]} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.11133 6.11107L7.33355 12.3333L18.0002 1.66663" stroke="white" strokeWidth="3" />
    </svg>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default memo(Gage);
