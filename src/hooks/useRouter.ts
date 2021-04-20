import { ParsedUrlQuery } from 'querystring';

import { useRouter as nextRouter } from 'next/router';

type CastQuery<T> = T & ParsedUrlQuery;

const useRouter = <T>() => {
  const { query: nextQuery, ...route } = nextRouter();

  const query = nextQuery as CastQuery<T>;

  return {
    ...route,
    query,
  };
};

export default useRouter;
