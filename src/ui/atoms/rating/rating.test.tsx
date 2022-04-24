import { render, screen } from '@testing-library/react';
import { AppProvider } from 'src/app-provider';
import { Rating, calculateRating } from './rating';
import { getStarFilled } from './rating.utils';

describe('Rating', () => {
  test('display stars', () => {
    render(
      <AppProvider>
        <Rating value={4.4} />
      </AppProvider>,
    );

    const allRatings = screen.getAllByTestId('rating');

    const filled = allRatings.slice(0, 4);
    const halfFilledContainer = allRatings[4];
    const halfFilled = halfFilledContainer.firstChild;
    const empty = halfFilledContainer.lastChild;

    expect(allRatings.length).toBe(6);
    filled.forEach((f) => expect(f).toHaveStyle('color: #ffef00'));
    expect(halfFilled).toHaveStyle('width: 50%');
    expect(halfFilled).toHaveStyle('color: #ffef00');
    expect(empty).toHaveStyle('color: white');
    expect(screen.getByText('4.4')).toBeInTheDocument();
  });
});

describe('Rating calculateRating', () => {
  test('return correct rating', () => {
    expect(calculateRating(4.4)).toBe(4.5);
    expect(calculateRating(4.6)).toBe(5);
    expect(calculateRating(4.5)).toBe(4.5);
    expect(calculateRating(4.1)).toBe(4.5);
    expect(calculateRating(4)).toBe(4);
  });
});

describe('Rating getStarFilled', () => {
  test('return type of filled star', () => {
    expect(getStarFilled({ rating: 6, currentElement: 5.6 })).toEqual('filled');
    expect(getStarFilled({ rating: 5, currentElement: 8.1 })).toEqual('empty');
    expect(getStarFilled({ rating: 3.5, currentElement: 4 })).toEqual('halfFilled');
  });
});
