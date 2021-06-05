import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from 'rebass';

import useProgressBar from '~hooks/useProgressBar';
import useScrollTo from '~hooks/useScrollTo';
import Navigation from '~molecules/Navigation';
import QuestionForm from '~organisms/Question';

const TOTAL_STEP = 20;

const Question = () => {
  const [innerHeight, setInnerHeight] = useState(0);

  const { renderProgressBar, handleIncreaseGage, resetGage } = useProgressBar({ totalCount: TOTAL_STEP, minCount: 0 });

  const { ref, handleExecuteScroll } = useScrollTo(undefined, { top: innerHeight });

  const [step, setStep] = useState({
    unit: 1,
    number: 1,
  });

  const handleScrollTo = () => {
    handleExecuteScroll();
  };

  const handleProceedStep = () => {
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

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    finishedStep();
  }, [step]);

  return (
    <Box variant="snapScroll" ref={ref}>
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
      <QuestionForm
        handleScrollTo={handleScrollTo}
        handleProceedStep={handleProceedStep}
        handleIncreaseGage={handleIncreaseGage}
      />
    </Box>
  );
};

export default Question;
