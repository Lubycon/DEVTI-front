import { ThemeProvider } from 'emotion-theming';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { queryClient } from '../config/reactQuery';
import isMobileDetect from '../libs/server/isMobileDetect';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import { initAmplitude } from '../utils/amplitude';

interface Context {
  Component: NextComponentType<NextPageContext>;
  ctx: NextPageContext;
}
initAmplitude();

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

  return { pageProps: { isMobile } };
};

export default App;
