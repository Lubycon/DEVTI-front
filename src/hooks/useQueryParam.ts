import { ParsedUrlQuery } from 'querystring';

import { useRouter } from 'next/router';

export type CastQuery<T> = T & ParsedUrlQuery;

const useQueryParam = <T>() => {
  const { query: nextQuery } = useRouter();

  const query = nextQuery as CastQuery<T>;

  return {
    query,
  };
};

export default useQueryParam;
