import { Star } from '../../star/star';
import * as S from './filled-star.styles';
import { FilledStarProps, StarContainerProps } from './filled-star.types';

const StarContainer = ({ color, strokeColor }: StarContainerProps) => (
  <S.StarContainer $color={color} data-testid="rating">
    <Star strokeColor={strokeColor} />
  </S.StarContainer>
);

export const FilledStar = ({ starFilled }: FilledStarProps) => {
  switch (starFilled) {
    case 'halfFilled':
      return (
        <S.HalfFilledContainer data-testid="rating">
          <S.HalfFilled $color="yellow">
            <Star />
          </S.HalfFilled>
          <StarContainer color="white" strokeColor="yellow" />
        </S.HalfFilledContainer>
      );
    case 'filled':
      return <StarContainer color="yellow" />;
    case 'empty':
      return <StarContainer color="white" strokeColor="yellow" />;
    default:
      throw new Error(`Type ${starFilled} not found`);
  }
};
