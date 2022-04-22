import { CSSProperties, ReactNode } from 'react';
import { Colors } from 'styles/emotion';

export interface TypographyProps {
  el: 'span' | 'p' | 'h1' | 'h2' | 'h3';
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: Colors;
  className?: string;
  fontWeight?: CSSProperties['fontWeight'];
}
