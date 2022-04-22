import styled from '@emotion/styled';
import { Rating as DefaultRating, Thumbnail as DefaultThumbnail, Typography } from 'ui/atoms';
import { TripCard } from './trip-card';

export const Thumbnail = styled(DefaultThumbnail)`
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

export const Description = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing[0]};
  font-size: 10px;
  `}
`;

export const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: 18px;
`;

export const Rating = styled(DefaultRating)`
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const PriceContainer = styled(Typography)`
  font-size: 12px;
`;

export const Price = styled(Typography)`
  margin-right: ${({ theme }) => theme.spacing[1]};
`;

export const PreviousPrice = styled(Typography)`
  text-decoration: line-through;
`;
