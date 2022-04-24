import styled from '@emotion/styled';
import { Rating as DefaultRating, Thumbnail as DefaultThumbnail, Typography } from 'src/ui/atoms';

const radius = '5px';

export const Thumbnail = styled(DefaultThumbnail)`
  overflow: hidden;
  border-top-right-radius: ${radius};
  border-top-left-radius: ${radius};
`;

export const Description = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom-right-radius: ${radius};
  border-bottom-left-radius: ${radius};
  border-top: 0;
`;

export const Countries = styled(Typography)`
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
  display: flex;
`;

export const Price = styled(Typography)`
  margin-right: ${({ theme }) => theme.spacing[1]};
`;

export const PreviousPrice = styled(Typography)`
  text-decoration: line-through;
  display: list-item;
  margin-left: ${({ theme }) => theme.spacing[3]};
`;
