import styled from '@emotion/styled';
import { Colors } from 'src/styles/emotion';

export const HalfFilledContainer = styled.div`
  display: flex;
  position: relative;
`;

export const StarContainer = styled.div<{ $color: Colors }>`
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const HalfFilled = styled(StarContainer)`
  width: 50%;
  overflow: hidden;
  position: absolute;
  color: ${({ theme, $color }) => theme.colors[$color]};
`;
