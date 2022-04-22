import styled from '@emotion/styled';
import { Typography as DefaultTypography } from '../typography/typography';

export const Container = styled.div`
  display: inline-flex;
`;

export const RatingContainer = styled.div`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing[2]};
`;

export const Typography = styled(DefaultTypography)`
  display: flex;
  align-items: center;
`;
