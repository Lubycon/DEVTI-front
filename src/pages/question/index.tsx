import { useEffect, useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Box, Flex, Heading, Text } from 'rebass';

import { fetchAllQuestion, fetchQuestionKey } from '~hooks/api/useFetchQuestion';
import useProgressBar from '~hooks/useProgressBar';
import useScrollTo from '~hooks/useScrollTo';
import Navigation from '~molecules/Navigation';
import QuestionForm from '~organisms/Question';

const TOTAL_STEP = 20;
const LAST_STEP = 3;

const Question = () => {
  const [totalStep, setTotalStep] = useState(TOTAL_STEP);

  const [innerHeight, setInnerHeight] = useState(0);

  const { renderProgressBar, handleIncreaseGage, resetGage } = useProgressBar({ totalCount: totalStep, minCount: 0 });

  const { ref, handleExecuteScroll } = useScrollTo(undefined, { top: innerHeight });

  const [step, setStep] = useState({
    unit: 1,
    number: 0,
  });

  const handleProceedStep = () => {
    setStep({
      ...step,
      number: step.number + 1,
    });
  };

  const finishedStep = () => {
    if (step.unit === LAST_STEP) {
      setTotalStep(2);
    }
    if (totalStep === step.number && step.unit !== LAST_STEP) {
      resetGage();
      setStep({
        unit: step.unit + 1,
        number: 0,
      });
    }
  };

  useEffect(() => {
    setInnerHeight(document.body.scrollHeight);
  }, []);

  useEffect(() => {
    finishedStep();
  }, [step]);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  return (
    <Box variant="snapScroll" ref={ref}>
      <Navigation>
        <Flex flex={1} flexDirection="column">
          <Flex flex={1} mb={3} justifyContent="space-between" alignItems="center">
            <Heading fontSize={20} fontWeight={800} color="primary">
              DEVTI
            </Heading>
            <Text fontSize={12} fontWeight={400}>
              {`${step.number} / ${totalStep}`}
            </Text>
          </Flex>
          {renderProgressBar()}
        </Flex>
      </Navigation>
      <QuestionForm
        handleScrollTo={handleExecuteScroll}
        handleProceedStep={handleProceedStep}
        handleIncreaseGage={handleIncreaseGage}
      />
    </Box>
  );
};

export async function getStaticProps() {
  const queryCache = new QueryClient();
  await queryCache.prefetchQuery(fetchQuestionKey, fetchAllQuestion);

  return {
    props: { dehydratedState: dehydrate(queryCache) },
  };
}

export default Question;
