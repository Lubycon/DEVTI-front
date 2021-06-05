import { Button, Flex, Image } from 'rebass';

import Circle from '~atoms/Circle';
import { PresetModel } from '~models/questions';
import { check } from '~public/assets/icons';

interface PresetProps {
  presets: PresetModel[];
  onAnswerClick: (value: number, answerType: string) => void;
}

const Preset = ({ presets, onAnswerClick }: PresetProps) => (
  <>
    {presets.map(({ label, key, isChecked }, index) => (
      <Button
        key={key}
        onClick={() => {
          onAnswerClick(index, 'preset');
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
          {label}
          <Circle bg={isChecked ? 'primary' : 'gray.3'} width="24px">
            <Image src={check} width="12px" />
          </Circle>
        </Flex>
      </Button>
    ))}
  </>
);

export default Preset;
