import results from 'queryKeys/results';
import { useQuery } from 'react-query';

import { CastQuery } from '~hooks/useQueryParam';
import apiMap from '~libs/apiMap';
import callApi from '~libs/callApi';
import { Result } from '~models/Result';

export const fetchSummary = async (queries: CastQuery<{ [key: string]: string }>) => {
  const {
    fetchSummary: { url, method },
  } = apiMap;

  return callApi(url, {
    method,
    data: {
      ...queries,
    },
  });
};

const useFetchSummary = (queries: CastQuery<{ [key: string]: string }>) => {
  const { data, isError } = useQuery<Result>(results.summary(queries), () => fetchSummary(queries));
  return {
    data,
    isError,
  };
};

export default useFetchSummary;
