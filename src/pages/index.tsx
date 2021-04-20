import Link from 'next/link';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { fetchCats } from '../hooks/api/useGetDummyApi';

const KEY = 'dummy';

const Index = () => (
  <h1>
    <Link href="/question/1">
      <a>go to Question</a>
    </Link>
  </h1>
);

export const getStaticProps = async () => {
  const queryCache = new QueryClient();

  await queryCache.prefetchQuery(KEY, fetchCats);
  return { props: { dehydratedState: dehydrate(queryCache) } };
};

export default Index;
