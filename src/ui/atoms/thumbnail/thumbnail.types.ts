import { CSSProperties } from 'react';

export interface ThumbnailProps {
  src: string;
  alt: string;
  height?: CSSProperties['height'];
  className?: string;
  blurDataURL?: string;
}
