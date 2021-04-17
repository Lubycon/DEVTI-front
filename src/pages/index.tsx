import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { callApi, Cat } from '../hooks/api/useGetDummyApi';

const KEY = 'dummy';

const Index = () => {
  const { data } = useQuery<Cat[]>(KEY);

  return (
    <div>
      {data?.map(({ text, _id: id }) => <div key={id}>{text}</div>)}
    </div>
  );
};

export const getStaticProps = async () => {
  const queryCache = new QueryClient();

  await queryCache.prefetchQuery(KEY, callApi);
  return { props: { dehydratedState: dehydrate(queryCache) } };
};

export default Index;
