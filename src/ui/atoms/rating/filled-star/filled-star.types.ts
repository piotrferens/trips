import { Theme } from '@emotion/react';
import { StarProps } from 'ui/atoms/star/star.types';

type Colors = keyof Theme['colors'];

export interface FilledStarProps {
  starFilled: 'halfFilled' | 'filled' | 'empty';
}

export interface StarContainerProps {
  color: Colors;
  strokeColor?: StarProps['strokeColor'];
}
