import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { queryClient } from '../config/reactQuery';

const App = ({ Component, pageProps }:AppProps) => (

  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
