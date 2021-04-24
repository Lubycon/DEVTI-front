import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { queryClient } from '../config/reactQuery';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
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

export default App;
