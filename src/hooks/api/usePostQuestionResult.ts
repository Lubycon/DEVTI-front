import { useMutation, useQueryClient } from 'react-query';

import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { AnswerModel, QuestionResult } from '~models/Question';

export const postQuestionResult = async (data: AnswerModel[]) => {
  const { postQuestion } = apiMap;
  const { url, method } = postQuestion;
  return callApi<QuestionResult>(url, {
    method,
    body: data,
  });
};

const usePostQuestionResult = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateQuestionResult } = useMutation((answers: AnswerModel[]) => postQuestionResult(answers), {
    onSuccess: (data) => {
      queryClient.setQueryData('result', data);
    },
  });

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionResult;
