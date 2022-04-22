import { Theme } from '@emotion/react';
import { CSSProperties, ReactNode } from 'react';

export interface TypographyProps {
  el: 'span' | 'p' | 'h1' | 'h2' | 'h3';
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: keyof Theme['colors'];
  className?: string;
  fontWeight?: CSSProperties['fontWeight'];
}
