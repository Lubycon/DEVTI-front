import axios, { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { BASE_URL } from '~libs/apiMap';
import { Result } from '~models/DEVTI';
import { AnswerModel } from '~models/Question';

export const postQuestionResult = (data: AnswerModel[]) => axios.post<AxiosResponse<Result>>(`${BASE_URL}/devti`, data);

const usePostQuestionResult = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateQuestionResult } = useMutation((answers: AnswerModel[]) => postQuestionResult(answers), {
    onSuccess: ({ data }) => {
      queryClient.setQueryData('result', data);
    },
  });

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionResult;
