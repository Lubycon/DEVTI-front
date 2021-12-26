import results from 'queryKeys/results';
import { useQuery } from 'react-query';

import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { Result } from '~models/Result';

export const fetchQuestion = async (queries: string) => {
  const {
    fetchQuestionResult: { url, method },
  } = apiMap;

  return callApi(url, {
    method,
    data: {
      queries,
    },
  });
};

const useFetchQuestion = (queries: string) => {
  const { data, isError } = useQuery<Result>(results.summary(queries), () => fetchQuestion(queries));
  return {
    data,
    isError,
  };
};

export default useFetchQuestion;
