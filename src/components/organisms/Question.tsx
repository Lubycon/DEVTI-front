import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flex, Text } from 'rebass';

import questions, { AnswerModel, OmitAnswerInId } from '~models/questions';
import Multiple from '~molecules/MultipleAnswer';
import Preset from '~molecules/Preset';

interface QuestionFormProps {
  handleScrollTo: VoidFunction;
  handleProceedStep: VoidFunction;
  handleIncreaseGage: VoidFunction;
}

const QuestionForm = ({ handleScrollTo, handleProceedStep, handleIncreaseGage }: QuestionFormProps) => {
  const [answers, setAnswers] = useState<AnswerModel[]>([]);

  const { push } = useRouter();

  const handleAnswerClick = (id: number) => (omitAnswerInId: OmitAnswerInId) => {
    handleScrollTo();
    handleProceedStep();
    handleIncreaseGage();

    const newAnswer = { id, ...omitAnswerInId };
    const hasAnswer = answers.find(({ id: prevId }) => prevId === id);
    const updateAnswers = answers.reduce<AnswerModel[]>(
      (acc, cur) => {
        if (hasAnswer) {
          return answers.map(({ id: prevId, ...answer }) => (prevId === id ? newAnswer : { id: prevId, ...answer }));
        }
        return [...acc, cur];
      },
      [newAnswer]
    );
    setAnswers(updateAnswers);
  };

  useEffect(() => {
    if (answers.length === questions?.length) {
      push('/result/entp');
    }
  }, [answers]);

  return (
    <>
      {questions?.map(({ title, id, presets, answerType }, i) => (
        <Flex variant="question" key={id}>
          <Text fontSize={12} color="gray.5" mb={1}>
            Q{i + 1}
          </Text>
          <Text fontSize={16} color="gray.6" lineHeight="22px" mb={40}>
            {title}
          </Text>
          <Flex width="100%" flexDirection="column">
            {answerType === 'preset'.toUpperCase() ? (
              <Preset presets={presets} onAnswerClick={handleAnswerClick(id)} />
            ) : (
              <Multiple presets={presets} onAnswerClick={handleAnswerClick(id)} mt={4} />
            )}
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default QuestionForm;
