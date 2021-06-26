import { useQuery } from 'react-query';

import callApi from '~libs/callApi';
import { Question } from '~models/Question';

export const fetchQuestionKey = 'questions';

export const fetchAllQuestion = () => callApi<Question[]>({ key: 'getAllQuestion', data: {} });

const useFetchAllQuestion = () => {
  const { data, isError } = useQuery<Question[]>(fetchQuestionKey, fetchAllQuestion);

  return {
    data,
    isError,
  };
};

export default useFetchAllQuestion;
