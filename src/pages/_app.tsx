import { ThemeProvider } from 'emotion-theming';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { dehydrate, Hydrate } from 'react-query/hydration';

import { queryClient } from '../config/reactQuery';
import callApi from '../libs/callApi';
import isMobileDetect from '../libs/server/isMobileDetect';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

interface Context {
  Component: NextComponentType<NextPageContext>;
  ctx: NextPageContext;
}

const App = ({ Component, pageProps }: AppProps) => {
  queryClient.setQueryData('isMobile', pageProps.isMobile);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx: { req } }: Context) => {
  const isMobile = isMobileDetect(req);
  const queryCache = new QueryClient();
  const param = new URLSearchParams(req?.url).get('/?source');
  const entryPoint = param ?? 'COMMON_ENTRY_POINT';

  await queryCache.prefetchQuery('source', () => callApi({ key: 'getBucketTest', data: { entryPoint } }));

  return { pageProps: { isMobile, dehydratedState: dehydrate(queryCache) } };
};

export default App;
