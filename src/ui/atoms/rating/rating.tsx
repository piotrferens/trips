import React from 'react';
import { FilledStar } from './filled-star/filled-star';
import { getStarFilled } from './rating.utils';
import { RatingProps } from './rating.types';
import * as S from './rating.styles';

export const Rating = ({ value, totalRating = 5, className }: RatingProps) => {
  if (value < 0 || value > totalRating) throw new Error(`Value cannot be greater than ${totalRating} and lower than 0`);

  const rating = Math.ceil(value * 2) / 2;

  return (
    <S.Container className={className}>
      <S.RatingContainer>
        {[...new Array(totalRating)].map((arr, index) => {
          const typeOfFilledElement = getStarFilled({ rating, currentElement: index + 1 });

          return <FilledStar key={index} starFilled={typeOfFilledElement} />;
        })}
      </S.RatingContainer>
      <S.Typography el="p" fontWeight={'bold'}>
        {value}
      </S.Typography>
    </S.Container>
  );
};
