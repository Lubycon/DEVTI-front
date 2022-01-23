import Answer from 'components/AnswerType/Answer';
import Devti from 'components/Devti';
import Opacity from 'components/Opacity';
import { useRouter } from 'next/router';
import questions from 'queryKeys/questions';
import {
  createRef,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Box, Flex, Text } from 'rebass';
import { stringifyQueryParams } from 'temen';

import ProgressBar, { ProgressBarHandle } from '~atoms/ProgressBar';
import useFetchQuestion, { fetchQuestion } from '~hooks/api/useFetchQuestion';
import usePostQuestionResult from '~hooks/api/usePostQuestionResult';
import { AnswerModel, OmitAnswerInId } from '~models/Question';
import Navigation from '~molecules/Navigation';

interface CombineAnswersParams {
  answers: AnswerModel[];
  id: number;
  omitAnswerInId: OmitAnswerInId;
}

function hasFindAnswerOnId(answers: AnswerModel[], id: number) {
  return Boolean(answers.find((answer) => answer.id === id));
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

const selectedReducer = (state: number[], id: number) => {
  const index = state.findIndex((prevId) => prevId === id);

  return index === -1 ? [...state, id] : [...state];
};

const Question = () => {
  const [answers, setAnswers] = useState<AnswerModel[]>([]);
  const [opacites, setOpacites] = useState<number[]>([]);
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  const { push } = useRouter();
  const { data } = useFetchQuestion();
  const [values, pushSelectedValues] = useReducer(selectedReducer, []);

  const { mutateQuestionResult } = usePostQuestionResult();

  const progessBarRef = useRef<ProgressBarHandle>(null);

  useEffect(() => {
    setOpacites([...Array(data?.length)].map((_, i) => (i ? 0.2 : 1)));
    refs.current = [...Array(data?.length)].map(() => createRef<HTMLDivElement>());
  }, [questions]);

  const handleAnswerClick = (id: number) => ({ ...omitAnswerInId }: OmitAnswerInId) => {
    const updateAnswers = combineAnswers({ answers, id, omitAnswerInId });
    setAnswers(() => {
      navigateResult(updateAnswers); // 마지막 엘리먼트일 경우 결과 페이지로 이동한다.
      return updateAnswers;
    });

    if (hasFindAnswerOnId(answers, id)) return;

    progessBarRef.current?.handleIncreaseGage();
  };

  const focusedElementRemoveOpacity = (index: number) => {
    if (index + 1 === data?.length) return;

    const element = refs.current[index + 1].current as HTMLDivElement;
    const prevElement = refs.current[index].current as HTMLDivElement;

    prevElement.style.opacity = '0.2';

    if (!values.find((value) => value === index + 1)) element.style.opacity = '1';
  };

  const scrollIntoView = (index: number) => {
    refs.current[index].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateResult = async (updateAnswers: AnswerModel[]) => {
    if (updateAnswers.length !== data?.length) return;

    const { result } = await mutateQuestionResult(updateAnswers);
    const query = stringifyQueryParams(result);

    push(`/result${query}`);
  };

  const handleClick = (index: number) => () => {
    pushSelectedValues(index);
    scrollIntoView(index); // 스크롤을 이동시킨다.
    focusedElementRemoveOpacity(index); // 포커스된 엘리먼트의 오프셋을 제거한다.
  };

  return (
    <Box>
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
        {data?.map(({ id, title, presetList, answerType }, i) => (
          <Opacity key={id} ref={refs.current[i]} opacity={opacites[i]} mb={!i ? 0 : 28} mt={!i ? 60 : 28}>
            <Answer
              key={id}
              type={answerType}
              title={title}
              presets={presetList}
              onPhaseClick={handleClick(i)}
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
