import { Colors } from 'styles/emotion';
import { StarProps } from 'ui/atoms/star/star.types';

export interface FilledStarProps {
  starFilled: 'halfFilled' | 'filled' | 'empty';
}

export interface StarContainerProps {
  color: Colors;
  strokeColor?: StarProps['strokeColor'];
}
