import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProps } from './theme.types';

const theme: Theme = {
  breakpoints: {
    mobile: 600,
    desktop: 1200,
  },
  spacing: ['4px', '8px', '12px', '16px', '20px', '24px'],
  colors: {
    black: 'black',
    gray: 'gray',
    yellow: '#ffef00',
    white: 'white',
  },
};

export const ThemeProvider = ({ children }: ThemeProps) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
