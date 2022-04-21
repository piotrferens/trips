import * as S from './typography.styles';
import { TypographyProps } from './typography.types';

export const Typography = ({
  el,
  children,
  className,
  align = 'left',
  color = 'black',
  fontWeight = 'initial',
}: TypographyProps) => (
  <S.Typography as={el} className={className} $align={align} $color={color} $fontWeight={fontWeight}>
    {children}
  </S.Typography>
);
