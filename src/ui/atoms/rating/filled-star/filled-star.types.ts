import { Colors } from 'src/styles/emotion';
import { StarProps } from 'src/ui/atoms/star/star.types';

export interface FilledStarProps {
  starFilled: 'halfFilled' | 'filled' | 'empty';
}

export interface StarContainerProps {
  color: Colors;
  strokeColor?: StarProps['strokeColor'];
}
