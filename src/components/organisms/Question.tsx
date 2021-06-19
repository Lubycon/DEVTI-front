import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flex, Text } from 'rebass';

import useFetchAllQuestion from '~hooks/api/useFetchQuestion';
import usePostQuestionResult from '~hooks/api/usePostQuestionResult';
import { AnswerModel, AnswerType, OmitAnswerInId } from '~models/Question';
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

  const { data: questions } = useFetchAllQuestion();
  const { mutateQuestionResult } = usePostQuestionResult();

  const handleAnswerClick = (id: number) => ({ ...omitAnswerInId }: OmitAnswerInId) => {
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
    mutateQuestionResult(updateAnswers);
    setAnswers(updateAnswers);
  };

  useEffect(() => {
    if (answers.length === questions?.length) {
      mutateQuestionResult(answers);
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
            {answerType === AnswerType.Preset && <Preset presets={presets} onAnswerClick={handleAnswerClick(id)} />}
            {answerType === AnswerType.Gage && <Multiple presets={presets} onAnswerClick={handleAnswerClick(id)} mt={4} />}
            {answerType === AnswerType.Job && <Preset presets={presets} onAnswerClick={handleAnswerClick(id)} />}
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default QuestionForm;
