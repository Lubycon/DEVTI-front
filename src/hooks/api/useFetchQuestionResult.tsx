import { useMutation } from 'react-query';

import callApi from '~libs/callApi';
import { ResultSource, Result } from '~models/DEVTI';

const useFetchQuestionResult = () => {
  const fetchDevtiResult = (data: ResultSource) => callApi<Result>({ key: 'getQuestionResult', data });
  const { mutateAsync: mutateAsyncResult } = useMutation(fetchDevtiResult, {
    onSuccess: () => {},
  });

  return {
    mutateAsyncResult,
  };
};

export default useFetchQuestionResult;
