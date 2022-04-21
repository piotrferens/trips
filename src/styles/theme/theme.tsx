import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProps } from './theme.types';

const theme = {
  breakpoints: {
    mobile: 600,
    desktop: 1200,
  },
  spacing: ['4px', '8px', '12px', '16px', '20px', '24px'],
};

export const ThemeProvider = ({ children }: ThemeProps) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
