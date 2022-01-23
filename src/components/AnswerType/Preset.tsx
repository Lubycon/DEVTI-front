import Checkbox from 'components/Checkbox';
import List from 'components/List';
import Margin from 'components/Margin';
import React, { memo, useState } from 'react';
import { colors } from 'styles/theme';

import Txt from '~atoms/Txt';
import { AnswerType, OmitAnswerInId, PresetModel } from '~models/Question';

interface PresetProps {
  title: string;
  presets: PresetModel[];
  onPhaseClick: () => void;
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const Preset = ({ title, presets, onPhaseClick, onAnswerClick }: PresetProps) => {
  const [isActives, setIsActives] = useState(() => presets.map(() => false));

  const handleClick = (i: number) => {
    setIsActives([...isActives.map((_, index) => i === index)]);
  };

  return (
    <Margin>
      <List title={title} highLightColor={colors.grey200}>
        {presets.map(({ label, sequence, ...preset }, i) => (
          <List.Row
            key={label}
            left={<Checkbox checked={isActives[i]} />}
            onClick={() => {
              onAnswerClick({ answerType: AnswerType.Preset, sequence, ...preset });
              onPhaseClick();
              handleClick(i);
            }}
          >
            <Txt color={isActives[i] ? colors.purple : colors.grey200}>{label}</Txt>
          </List.Row>
        ))}
      </List>
    </Margin>
  );
};

export default memo(Preset);
