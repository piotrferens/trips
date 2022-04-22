import styled from '@emotion/styled';
import { TypographyProps } from './typography.types';

export const Typography = styled.p<{
  $align: TypographyProps['align'];
  $color: TypographyProps['color'];
  $fontWeight: TypographyProps['fontWeight'];
}>`
  ${({ $align, $color, $fontWeight, theme }) => `
  text-align: ${$align}; 
  color: ${$color ? theme.colors[$color] : theme.colors.black};
  font-weight: ${$fontWeight};`}
`;
