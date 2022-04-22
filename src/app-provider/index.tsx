import { ReactNode } from 'react';
import { CacheProvider, ThemeProvider } from 'src/styles';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <CacheProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </CacheProvider>
);
