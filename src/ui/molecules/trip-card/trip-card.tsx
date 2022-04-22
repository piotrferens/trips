import * as S from './trip-card.styles';
import { TripCardProps } from './trip-card.types';

const formatPrice = (price: number) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 3,
  }).format(price);

export const TripCard = ({
  title,
  thumbnailUrl,
  countries,
  days,
  rate,
  minimalPrice,
  previousPrice,
  className,
}: TripCardProps) => (
  <div className={className}>
    <S.Thumbnail src={thumbnailUrl} alt={`${title} thumbnail`} />
    <S.Description>
      <S.Countries el="p" fontWeight="bold">
        {countries} Countries, {days} Days
      </S.Countries>
      <S.Title el="p" fontWeight="bolder">
        {title}
      </S.Title>
      <S.Rating value={rate} />
      <S.PriceContainer el="p">
        <S.Price el="span" fontWeight="bold">
          From {formatPrice(minimalPrice)}
        </S.Price>
        <S.PreviousPrice el="span" fontWeight="bold" color="gray">
          Price {formatPrice(previousPrice)}
        </S.PreviousPrice>
      </S.PriceContainer>
    </S.Description>
  </div>
);
