import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Flex, Text } from 'rebass';

import useFetchQuestion from '~hooks/api/useFetchQuestion';
import useFetchQuestionResult from '~hooks/api/useFetchQuestionResult';
import usePostQuestionResult from '~hooks/api/usePostQuestionResult';
import useModal from '~hooks/useModal';
import { AnswerModel, AnswerType, OmitAnswerInId } from '~models/Question';
import ConfirmModal from '~molecules/ConfirmModal';
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

  const { data: questions, isError } = useFetchQuestion();

  const { mutateQuestionResult } = usePostQuestionResult();

  const { loadQuestionResult } = useFetchQuestionResult();

  const { handleOpen, renderModal } = useModal({
    children: (
      <ConfirmModal confirmText="확인">
        <Text variant="primary" textAlign="center" p={3}>
          {'문제를 가져오는데\n실패 하였습니다.'}
        </Text>
      </ConfirmModal>
    ),
  });

  const handleAnswerClick = (id: number) => ({ ...omitAnswerInId }: OmitAnswerInId) => {
    const newAnswer = { id, ...omitAnswerInId };
    const hasAnswer = answers.find(({ id: prevId }) => prevId === id);
    if (!hasAnswer) {
      handleIncreaseGage();
      handleProceedStep();
    }

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

  const isFinishedSummary = () => answers.length === questions?.length;

  const routeResultPage = (queryParams: string) => {
    const uri = `/result/${queryParams}`;
    push(uri);
  };

  const requestQuestionResult = async () => {
    const { result, job } = await mutateQuestionResult(answers);
    const { A, C, L, P, S, T, V, W } = result;

    const queryParams = `A=${A}&C=${C}&L=${L}&P=${P}&S=${S}&T=${T}&V=${V}&W=${W}&job=${job}`;

    loadQuestionResult(queryParams, {
      onSuccess: (response) => {
        console.log(response);
      },
    });
    routeResultPage(`fcpw/${queryParams}`);
  };

  useEffect(() => {
    if (isFinishedSummary()) {
      requestQuestionResult();
      return;
    }
    handleScrollTo();
  }, [answers]);

  useEffect(() => {
    if (isError) handleOpen();
  }, [isError]);

  return (
    <>
      {renderModal()}
      {questions
        ?.filter((_, i) => i < answers.length + 1)
        .map(({ title, id, presetList: presets, answerType }, i) => (
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
              {answerType === AnswerType.Info && <Preset presets={presets} onAnswerClick={handleAnswerClick(id)} />}
            </Flex>
          </Flex>
        ))}
    </>
  );
};

export default QuestionForm;
