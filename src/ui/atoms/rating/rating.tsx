import React from 'react';
import { FilledStar } from './filled-star/filled-star';
import { getStarFilled } from './rating.utils';
import { RatingProps } from './rating.types';
import * as S from './rating.styles';

export const calculateRating = (value: number) => Math.ceil(value * 2) / 2;

export const Rating = ({ value, totalRating = 5, className }: RatingProps) => {
  if (value < 0 || value > totalRating) throw new Error(`Value cannot be greater than ${totalRating} and lower than 0`);

  const rating = calculateRating(value);

  return (
    <S.Container className={className}>
      <S.RatingContainer data-testid="rating-container">
        {[...new Array(totalRating)].map((_arr, index) => (
          <FilledStar key={index} starFilled={getStarFilled({ rating, currentElement: index + 1 })} />
        ))}
      </S.RatingContainer>
      <S.Typography el="p" fontWeight={'bold'}>
        {value}
      </S.Typography>
    </S.Container>
  );
};
