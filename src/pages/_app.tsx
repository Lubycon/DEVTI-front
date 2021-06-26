import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { queryClient } from '../config/reactQuery';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const queryCache = new QueryClient();
  queryCache.setQueryData('isMobile', pageProps.isMobile);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
