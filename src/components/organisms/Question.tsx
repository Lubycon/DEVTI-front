import { Flex, Text } from 'rebass';

import { QuestionModel } from '~models/questions';
import Multiple from '~molecules/MultipleAnswer';
import Preset from '~molecules/Preset';

interface QuestionFormProps {
  questions: QuestionModel[];
  onAnswerClick: (id: number) => (value: number, type: string) => void;
}

const QuestionForm = ({ questions, onAnswerClick }: QuestionFormProps) => (
  <>
    {questions.map(({ title, id, presets }) => (
      <Flex variant="question" key={id}>
        <Text fontSize={12} color="gray.5" mb={1}>
          Q{id + 1}
        </Text>
        <Text fontSize={16} color="gray.6" lineHeight="22px" mb={40}>
          {title}
        </Text>
        <Flex width="100%" flexDirection="column">
          {presets ? (
            <Preset presets={presets} onAnswerClick={onAnswerClick(id)} />
          ) : (
            <Multiple onAnswerClick={onAnswerClick(id)} mt={4} />
          )}
        </Flex>
      </Flex>
    ))}
  </>
);

export default QuestionForm;
