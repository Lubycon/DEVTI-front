import results from 'queryKeys/results';
import { useMutation, useQueryClient } from 'react-query';

import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { AnswerModel } from '~models/Question';

export const postResultSummary = (body: AnswerModel[]) => {
  const {
    postQuestion: { url, method },
  } = apiMap;

  return callApi(url, { method, body });
};

const usePostQuestionSummary = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateQuestionResult } = useMutation((answers: AnswerModel[]) => postResultSummary(answers), {
    onSuccess: (data) => {
      queryClient.setQueryData(results.summary(data), data);
    },
  });

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionSummary;
