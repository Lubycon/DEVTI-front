import { useMutation, useQueryClient } from 'react-query';

import callApi from '~libs/callApi';
import { ResultSource } from '~models/DEVTI';
import { AnswerModel } from '~models/Question';

export const postResultSummary = (data: AnswerModel[]) => callApi<ResultSource>({ key: 'postResultSummary', data });

const usePostQuestionSummary = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateQuestionResult } = useMutation((answers: AnswerModel[]) => postResultSummary(answers), {
    onSuccess: (data) => {
      queryClient.setQueryData('result', data);
    },
  });

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionSummary;
