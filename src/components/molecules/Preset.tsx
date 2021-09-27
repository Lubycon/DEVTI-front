import { useState } from 'react';
import { Box, Button, Flex, Image, Text } from 'rebass';

import Circle from '~atoms/Circle';
import { AnswerType, OmitAnswerInId, PresetModel } from '~models/Question';
import { check } from '~public/assets/icons';

interface PresetProps {
  presets: PresetModel[];
  onAnswerClick: (omitAnswerInId: OmitAnswerInId) => void;
}

const Preset = ({ presets, onAnswerClick }: PresetProps) => {
  const [isActives, setIsActives] = useState(presets.map(() => false));

  const handleClick = (i: number) => {
    setIsActives([...isActives.map((_, index) => i === index)]);
  };

  return (
    <>
      {presets.map(({ label, sequence, ...preset }, i) => (
        <Button
          key={sequence}
          onClick={() => {
            onAnswerClick({ answerType: AnswerType.Preset, sequence, ...preset });
            handleClick(i);
          }}
          variant="default"
          sx={{
            p: 3,
            mb: 2,
            bg: 'white',
            color: '#333333',
            width: '100%',
            border: '1px solid #e0e0e0',
            borderRadius: 5,
            textAlign: 'left',
          }}
        >
          <Flex variant="horizontalCentralCenter" justifyContent="space-between">
            <Text width="90%">{label}</Text>
            <Box>
              <Circle bg={isActives[i] ? 'primary' : 'gray.3'} width="24px">
                <Image src={check} width="12px" />
              </Circle>
            </Box>
          </Flex>
        </Button>
      ))}
    </>
  );
};

export default Preset;
