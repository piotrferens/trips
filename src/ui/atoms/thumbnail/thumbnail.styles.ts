import styled from '@emotion/styled';
import { ThumbnailProps } from './thumbnail.types';

export const Thumbnail = styled.div<{ $height: ThumbnailProps['height'] }>`
  position: relative;

  ${({ $height }) => `height: ${$height};`}
`;
