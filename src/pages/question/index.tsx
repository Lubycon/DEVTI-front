import { useEffect, useState } from 'react';
import { Flex, Heading, Text } from 'rebass';

import useProgressBar from '~hooks/useProgressBar';
import questions from '~models/questions';
import Navigation from '~molecules/Navigation';
import QuestionForm from '~organisms/Question';

const TOTAL_STEP = 20;

const Question = () => {
  const { renderProgressBar, handleIncreaseGage, resetGage } = useProgressBar({ totalCount: TOTAL_STEP, minCount: 0 });

  const [step, setStep] = useState({
    unit: 1,
    number: 1,
  });

  const scrollTo = () => {
    window.scrollBy({
      left: 0,
      top: window.innerHeight,
      behavior: 'smooth',
    });
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

  const handleAnswerClick = (id: number) => (value: number, type: string) => {
    const answer = {
      id,
      type,
      value,
    };
    scrollTo();
    proceedStep();
    handleIncreaseGage();
    // eslint-disable-next-line no-console
    console.log('answer', answer);
  };

  useEffect(() => {
    finishedStep();
  }, [step]);

  return (
    <Flex flexDirection="column">
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
    </Flex>
  );
};

export default Question;
