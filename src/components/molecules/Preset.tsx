import { Button } from 'rebass';

interface PresetProps {
  presets: {
    label: string;
    key: number;
  }[];
  onAnswerClick: (value: number, type: string) => void;
}

const Preset = ({ presets, onAnswerClick }: PresetProps) => (
  <>
    {presets.map(({ label, key }, index) => (
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
        {label}
      </Button>
    ))}
  </>
);

export default Preset;
