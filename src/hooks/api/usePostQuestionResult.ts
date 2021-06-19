import axios from 'axios';
import { useMutation } from 'react-query';

import { BASE_URL } from '~libs/apiMap';
import { AnswerModel } from '~models/Question';

export const postQuestionResult = (data: AnswerModel[]) => axios.post(`${BASE_URL}/devti`, data);

const usePostQuestionResult = () => {
  const { mutateAsync: mutateQuestionResult } = useMutation((answers: AnswerModel[]) => postQuestionResult(answers));

  return {
    mutateQuestionResult,
  };
};

export default usePostQuestionResult;
