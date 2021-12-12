import results from 'queryKeys/results';
import { useMutation } from 'react-query';

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
  const { mutateAsync: mutateQuestionResult } = useMutation(results.all, (answers: AnswerModel[]) => postQuestionResult(answers));

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionResult;
