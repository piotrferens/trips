import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const HalfFilledContainer = styled.div`
  display: flex;
  position: relative;
`;

export const StarContainer = styled.div<{ $color: keyof Theme['colors'] }>`
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const HalfFilled = styled(StarContainer)`
  width: 50%;
  overflow: hidden;
  position: absolute;
  color: ${({ theme, $color }) => theme.colors[$color]};
`;
