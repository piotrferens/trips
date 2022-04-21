import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from 'styles';

const cache = createCache({ key: 'trips-emotion-key-cache' });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CacheProvider>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
