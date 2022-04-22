import styled from '@emotion/styled';
import { Typography } from 'src/ui/atoms';
import { TripCard as DefaultTripCard } from 'src/ui/molecules';

export const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const TripCard = styled(DefaultTripCard)`
  width: 276px;
`;
