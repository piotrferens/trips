import type { AppProps } from 'next/app';
import { AppProvider } from 'src/app-provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default MyApp;
