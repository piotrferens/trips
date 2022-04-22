import type { AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from 'styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CacheProvider>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
