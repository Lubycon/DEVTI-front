/* eslint-disable import/prefer-default-export */
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  },
});

export {
  queryClient,
};
