import Devti from 'components/Devti';
import Opacity from 'components/Opacity';
import ListRowPreset from 'components/QuestionForm';
import questions from 'queryKeys/questions';
import { createRef, isValidElement, PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Box, Flex, Text } from 'rebass';

import ProgressBar, { ProgressBarHandle } from '~atoms/ProgressBar';
import useFetchQuestion, { fetchQuestion } from '~hooks/api/useFetchQuestion';
import { AnswerModel, AnswerType, OmitAnswerInId } from '~models/Question';
import Navigation from '~molecules/Navigation';

function hasFindAnswerOnId(answers: AnswerModel[], id: number) {
  return Boolean(answers.find((answer) => answer.id === id));
}

interface CombineAnswersParams {
  answers: AnswerModel[];
  id: number;
  omitAnswerInId: OmitAnswerInId;
}

function combineAnswers({ answers, id, omitAnswerInId }: CombineAnswersParams) {
  const newAnswer = { id, ...omitAnswerInId };

  return answers.reduce<AnswerModel[]>(
    (acc, cur) => {
      if (hasFindAnswerOnId(answers, id)) {
        return answers.map(({ id: prevId, ...answer }) => (prevId === id ? newAnswer : { id: prevId, ...answer }));
      }
      return [...acc, cur];
    },
    [newAnswer]
  );
}

const Question = () => {
  const [answers, setAnswers] = useState<AnswerModel[]>([]);
  const [opacites, setOpacites] = useState<number[]>([]);
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);

  const { data } = useFetchQuestion();

  const progessBarRef = useRef<ProgressBarHandle>(null);

  useEffect(() => {
    setOpacites([...Array(data?.length)].map((_, i) => (i ? 0.2 : 1)));
    refs.current = [...Array(data?.length)].map(() => createRef<HTMLDivElement>());
  }, [questions]);

  const handleAnswerClick = (id: number) => ({ ...omitAnswerInId }: OmitAnswerInId) => {
    const updateAnswers = combineAnswers({ answers, id, omitAnswerInId });
    setAnswers(updateAnswers);

    if (hasFindAnswerOnId(answers, id)) return;

    progessBarRef.current?.handleIncreaseGage();
  };

  const focusedElementRemoveOpacity = (refIndex: number, id: number) => {
    const element = refs.current[refIndex + 1].current as HTMLDivElement;
    const prevElement = refs.current[refIndex].current as HTMLDivElement;

    prevElement.style.opacity = '0.2';

    if (!hasFindAnswerOnId(answers, id)) element.style.opacity = '1';
  };

  const scrollIntoView = (refIndex: number) => {
    refs.current[refIndex].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (refIndex: number, id: number) => () => {
    scrollIntoView(refIndex);
    focusedElementRemoveOpacity(refIndex, id);
  };

  return (
    <Box
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        overflowY: 'hidden',
      }}
    >
      <Navigation>
        <HeaderProgessBar left={<Devti size="small" />} right={`${answers.length} / ${data?.length}`}>
          <ProgressBar ref={progessBarRef} totalCount={data?.length ?? 0} minCount={0} />
        </HeaderProgessBar>
      </Navigation>
      <Box
        style={{
          position: 'absolute',
          top: 50,
        }}
      >
        {data
          ?.filter(({ answerType }) => answerType === AnswerType.Preset)
          .map(({ id, title, presetList }, i) => (
            <Opacity key={id} ref={refs.current[i]} opacity={opacites[i]} mb={!i ? 0 : 28} mt={!i ? 60 : 28}>
              <ListRowPreset
                key={id}
                title={title}
                presets={presetList}
                onPhaseClick={handleClick(i, id)}
                onAnswerClick={handleAnswerClick(id)}
              />
            </Opacity>
          ))}
      </Box>
    </Box>
  );
};

interface HeaderProgessBarProps {
  left?: ReactNode;
  right?: ReactNode;
}

const HeaderProgessBar = ({ left, right, children }: PropsWithChildren<HeaderProgessBarProps>) => (
  <Flex flex={1} flexDirection="column">
    <Flex flex={1} mb={3} justifyContent="space-between" alignItems="center">
      {left}
      {isValidElement(right) ? right : <Text>{right}</Text>}
    </Flex>
    {children}
  </Flex>
);

export async function getStaticProps() {
  const queryCache = new QueryClient();
  await queryCache.prefetchQuery(questions.all, fetchQuestion);

  return {
    props: { dehydratedState: dehydrate(queryCache) },
  };
}

export default Question;
