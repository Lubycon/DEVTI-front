import Answer from 'components/AnswerType/Answer';
import Devti from 'components/Devti';
import Opacity from 'components/Opacity';
import ProgessBar from 'components/ProgessBar';
import { useRouter } from 'next/router';
import questions from 'queryKeys/questions';
import { createRef, MutableRefObject, RefObject, useEffect, useReducer, useRef, useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Box } from 'rebass';
import { stringifyQueryParams } from 'temen';

import ProgressBar, { ProgressBarHandle } from '~atoms/ProgressBar';
import useFetchQuestion, { fetchQuestion } from '~hooks/api/useFetchQuestion';
import usePostQuestionResult from '~hooks/api/usePostQuestionResult';
import { AnswerModel, OmitAnswerInId, Question as QuestionModel } from '~models/Question';
import Navigation from '~molecules/Navigation';

interface CombineAnswersParams {
  answers: AnswerModel[];
  id: number;
  omitAnswerInId: OmitAnswerInId;
}

type Refs = MutableRefObject<RefObject<HTMLDivElement>[]>;

const hasFindAnswerOnId = (answers: AnswerModel[], id: number) => Boolean(answers.find((answer) => answer.id === id));
const combineAnswers = ({ answers, id, omitAnswerInId }: CombineAnswersParams) => {
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
};
const selectedReducer = (state: number[], id: number) => {
  const index = state.findIndex((prevId) => prevId === id);

  return index === -1 ? [...state, id] : [...state];
};
const increaseProgressGage = (ref: RefObject<ProgressBarHandle>) => {
  ref.current?.handleIncreaseGage();
};
const scrollIntoView = (index: number, refs: Refs) => {
  refs.current[index].current?.scrollIntoView({ behavior: 'smooth' });
};
const focusedElementRemoveOpacity = ({
  index,
  data,
  refs,
  values,
}: {
  index: number;
  data?: QuestionModel[];
  refs: Refs;
  values: number[];
}) => {
  if (index + 1 === data?.length) return;

  const element = refs.current[index + 1].current as HTMLDivElement;
  const prevElement = refs.current[index].current as HTMLDivElement;

  prevElement.style.opacity = '0.2';

  if (!values.find((value) => value === index + 1)) element.style.opacity = '1';
};

const Question = () => {
  const [answers, setAnswers] = useState<AnswerModel[]>([]);
  const [opacites, setOpacites] = useState<number[]>([]);
  const { push } = useRouter();
  const { data } = useFetchQuestion();
  const [values, pushSelectedValues] = useReducer(selectedReducer, []);
  const { mutateQuestionResult } = usePostQuestionResult();
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  const progessBarRef = useRef<ProgressBarHandle>(null);

  useEffect(() => {
    setOpacites([...Array(data?.length)].map((_, i) => (i ? 0.2 : 1)));
    refs.current = [...Array(data?.length)].map(() => createRef<HTMLDivElement>());
  }, [questions]);

  const handleAnswerClick = (id: number) => ({ ...omitAnswerInId }: OmitAnswerInId) => {
    const updateAnswers = combineAnswers({ answers, id, omitAnswerInId });
    appendAnswerAndNavigateResult(updateAnswers);
    if (hasFindAnswerOnId(answers, id)) return;
    increaseProgressGage(progessBarRef);
  };

  const appendAnswerAndNavigateResult = (updateAnswers: AnswerModel[]) => {
    setAnswers(() => {
      navigateResult(updateAnswers);
      return updateAnswers;
    });
  };

  const replaceFetchResultQueryParams = async (updateAnswers: AnswerModel[]) => {
    const { result } = await mutateQuestionResult(updateAnswers);
    return stringifyQueryParams(result);
  };

  const navigateResult = async (updateAnswers: AnswerModel[]) => {
    if (updateAnswers.length !== data?.length) return;

    const query = await replaceFetchResultQueryParams(updateAnswers);
    push(`/result${query}`);
  };

  const handleClick = (index: number) => () => {
    pushSelectedValues(index);
    scrollIntoView(index, refs);
    focusedElementRemoveOpacity({ index, data, refs, values });
  };

  return (
    <Box>
      <Navigation>
        <ProgessBar left={<Devti size="small" />} right={`${answers.length} / ${data?.length}`}>
          <ProgressBar ref={progessBarRef} totalCount={data?.length ?? 0} minCount={0} />
        </ProgessBar>
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

export async function getStaticProps() {
  const queryCache = new QueryClient();
  await queryCache.prefetchQuery(questions.all, fetchQuestion);

  return {
    props: { dehydratedState: dehydrate(queryCache) },
  };
}

export default Question;
