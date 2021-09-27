import questions from 'queryKeys/questions';
import { useQuery } from 'react-query';

import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { Question } from '~models/Question';

export const fetchQuestion = async () => {
  const {
    fetchQuestion: { url, method },
  } = apiMap;

  return callApi(url, { method });
};

const useFetchQuestion = () => {
  const { data, isError } = useQuery<Question[]>(questions.all, fetchQuestion);
  return {
    data,
    isError,
  };
};

export default useFetchQuestion;
