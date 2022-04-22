export interface RatingProps {
  value: number;
  totalRating?: number;
  className?: string;
}

export interface GetStarFilledProps {
  rating: number;
  currentElement: number;
}
