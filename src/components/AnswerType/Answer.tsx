import styled from '@emotion/styled';
import Checkbox from 'components/Checkbox';
import List from 'components/List';
import Margin from 'components/Margin';
import React, { memo, useState } from 'react';
import { colors } from 'styles/theme';

import Circle from '~atoms/Circle';
import Txt from '~atoms/Txt';
import { AnswerType, OmitAnswerInId, PresetModel } from '~models/Question';

interface PresetProps {
  type: AnswerType;
  title: string;
  presets: PresetModel[];
  onPhaseClick: () => void;
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const isFirstOrLastIndex = (index: number, values: unknown[]) => index === 0 || index === values.length - 1;
const generateSize = (index: number, values: unknown[]) => (isFirstOrLastIndex(index, values) ? 'md' : 'sm');

const Asnwer = ({ type, title, presets, onPhaseClick, onAnswerClick }: PresetProps) => {
  const [isActives, setIsActives] = useState(() => presets.map(() => false));

  const handleClick = (i: number) => {
    setIsActives([...isActives.map((_, index) => i === index)]);
  };

  return (
    <Margin>
      <List title={title} highLightColor={colors.grey200}>
        <Wrapper type={type}>
          {presets.map(({ label, sequence, ...preset }, i) => (
            <List.Row
              key={label}
              left={type !== AnswerType.Gage && <Checkbox checked={isActives[i]} />}
              onClick={() => {
                onAnswerClick({ answerType: AnswerType.Preset, sequence, ...preset });
                onPhaseClick();
                handleClick(i);
              }}
            >
              <SwithAnswer
                type={type}
                isActive={isActives[i]}
                label={label}
                width={isFirstOrLastIndex(i, presets) ? 48 : 32}
                size={generateSize(i, presets)}
              />
            </List.Row>
          ))}
        </Wrapper>
      </List>
    </Margin>
  );
};

interface AnswerProps {
  type: AnswerType;
  isActive: boolean;
  label: string;
  width: number;
  size: 'sm' | 'md';
}

const SwithAnswer = ({ type, isActive, label, width, size }: AnswerProps) =>
  ({
    [AnswerType.Gage]: <Gage width={width} isActive={isActive} size={size} />,
    [AnswerType.Info]: <Preset isActive={isActive} label={label} />,
    [AnswerType.Preset]: <Preset isActive={isActive} label={label} />,
  }[type]);

const Preset = ({ isActive, label }: { isActive: boolean; label: string }) => (
  <Txt color={isActive ? colors.purple : colors.grey200}>{label}</Txt>
);

const Gage = ({ width, isActive, size }: { width: number; isActive: boolean; size: 'md' | 'sm' }) => (
  <Circle as="button" width={width} isActive={isActive}>
    <CheckSvg size={size} />
  </Circle>
);

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

const Wrapper = styled.div<{ type: AnswerType }>`
  ${({ type }) => type === AnswerType.Gage && 'display: flex; justify-content: space-between; align-items: center;'};
`;

export default memo(Asnwer);
