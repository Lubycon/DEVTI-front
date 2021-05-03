import { Textarea, TextareaProps } from '@rebass/forms';
import { ChangeEvent, useState } from 'react';
import { Box, BoxProps, Text } from 'rebass';

interface CountCharactorTextareaProps extends TextareaProps {
  boxProps?: BoxProps;
}

const CountCharactorTextarea = ({ boxProps, ...props }: CountCharactorTextareaProps) => {
  const [countCharactor, setCountCharactor] = useState(0);

  const handleCountCharactor = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setCountCharactor(value.length);
  };

  return (
    <Box textAlign="right" {...boxProps}>
      <Textarea {...props} onChange={handleCountCharactor} />
      <Text
        sx={{
          position: 'relative',
          bottom: 25,
          right: 16,
          fontSize: 14,
          color: 'gray.3',
        }}
      >
        {countCharactor}자 입력
      </Text>
    </Box>
  );
};

export default CountCharactorTextarea;
