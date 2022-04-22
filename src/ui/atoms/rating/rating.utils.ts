import { FilledStarProps } from './filled-star/filled-star.types';
import { GetStarFilledProps } from './rating.types';

export const getStarFilled = ({ rating, currentElement }: GetStarFilledProps): FilledStarProps['starFilled'] => {
  if (rating - currentElement === -0.5) return 'halfFilled';

  if (currentElement <= rating) return 'filled';

  return 'empty';
};
