import Image from 'next/image';
import * as S from './thumbnail.styles';
import { ThumbnailProps } from './thumbnail.types';

const defaultBlurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABkCAYAAAA8AQ3AAAABBUlEQVR42u3UAQ0AAAQAMNpqYZrLwf4Qz6rpADgghQUIC0BYgLAAhAUgLEBYAMICEBYgLABhAQgLEBaAsACEBQgLQFgAwgKEBSAsAGEBwgIQFoCwAGEBCAtAWICwAIQFCEtYgLAAhAUIC0BYAMIChAUgLABhAcICEBaAsABhAQgLQFiAsACEBSAsQFgAwgIQFiAsAGEBCAsQFoCwAIQFCAtAWICwhAUIC0BYgLAAhAUgLEBYAMICEBYgLABhAQgLEBaAsACEBQgLQFgAwgKEBSAsAGEBwgIQFoCwAGEBCAtAWICwAIQFCEtYgLAAhAUIC0BYAMIChAUgLABhAcICEBaAsIC/FmpvtaXpu7ApAAAAAElFTkSuQmCC';

export const Thumbnail = ({ src, alt, className, blurDataURL, height = '170px' }: ThumbnailProps) => (
  <S.Thumbnail className={className} $height={height}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={blurDataURL || defaultBlurDataUrl}
    />
  </S.Thumbnail>
);
