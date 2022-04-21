import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { globalStyles } from '../styles';

const cache = createCache({ key: 'trips-emotion-key-cache' });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
);

export default MyApp;
