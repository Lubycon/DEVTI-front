import resultKeys from 'queryKeys/results';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { Result } from '~models/DEVTI';

const fetchQuestionResult = async (query: string) => {
  const {
    fetchQuestionResult: { url, method },
  } = apiMap;
  const result = await callApi<Result>(`${url}?${query}`, {
    method,
  });

  return result;
};

const useFetchQuestionResult = () => {
  const queryClient = useQueryClient();
  const { mutate: loadQuestionResult } = useMutation((query: string) => fetchQuestionResult(query), {
    onSuccess: (data) => {
      queryClient.setQueryData(resultKeys.all, data);
    },
  });

  return {
    loadQuestionResult,
  };
};

export default useFetchQuestionResult;
