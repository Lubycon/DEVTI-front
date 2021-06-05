import { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';

import useProgressBar from '~hooks/useProgressBar';
import useScrollTo from '~hooks/useScrollTo';
import mockQuestions, { CustomQuestion } from '~models/questions';
import Navigation from '~molecules/Navigation';
import QuestionForm from '~organisms/Question';

const TOTAL_STEP = 20;

interface Answer {
  id: number;
  answerType: string;
  value: number;
}

const Question = () => {
  const [questions, setQuestions] = useState<CustomQuestion[]>();

  const [answers, setAnswers] = useState<Answer[]>([]);

  const [innerHeight, setInnerHeight] = useState(0);

  const { renderProgressBar, handleIncreaseGage, resetGage } = useProgressBar({ totalCount: TOTAL_STEP, minCount: 0 });

  const { ref, handleExecuteScroll } = useScrollTo(undefined, { top: innerHeight });

  const [step, setStep] = useState({
    unit: 1,
    number: 1,
  });

  const scrollTo = () => {
    handleExecuteScroll();
  };

  const proceedStep = () => {
    setStep({
      ...step,
      number: step.number + 1,
    });
  };

  const finishedStep = () => {
    if (TOTAL_STEP < step.number) {
      resetGage();
      setStep({
        unit: step.unit + 1,
        number: 1,
      });
    }
  };

  const handleAnswerClick = (id: number) => (value: number, answerType: string) => {
    scrollTo();
    proceedStep();
    handleIncreaseGage();
    const newAnswer = { id, value, answerType };
    const hasAnswer = answers.find(({ id: prevId }) => prevId === id);

    const updateAnswers = answers.reduce<Answer[]>(
      (acc, cur) => {
        if (hasAnswer) {
          return answers.map(({ id: prevId, ...answer }) => (prevId === id ? newAnswer : { id: prevId, ...answer }));
        }
        const newAns = [...acc, cur];

        return newAns;
      },
      [newAnswer]
    );
    setAnswers(updateAnswers);
  };

  useEffect(() => {
    finishedStep();
  }, [step]);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const customQuestions = mockQuestions.map((mockQuestion) => ({ ...mockQuestion, checkedNumber: -1 }));
    setQuestions(customQuestions);
  }, []);

  return (
    <Box variant="snapScroll" ref={ref}>
      <Button>아아아</Button>
      <Navigation>
        <Flex flex={1} flexDirection="column">
          <Flex flex={1} mb={3} justifyContent="space-between" alignItems="center">
            <Heading fontSize={20} fontWeight={800} color="primary">
              DEVTI
            </Heading>
            <Text fontSize={12} fontWeight={400}>
              {`${step.number} / ${TOTAL_STEP}`}
            </Text>
          </Flex>
          {renderProgressBar()}
        </Flex>
      </Navigation>
      <QuestionForm onAnswerClick={handleAnswerClick} questions={questions} />
    </Box>
  );
};

export default Question;
