import { render, screen } from '@testing-library/react';
import { AppProvider } from 'src/app-provider';
import { Home } from './home';

describe('Home', () => {
  test('display header when there is no recently viewed trips', () => {
    render(
      <AppProvider>
        <Home trips={[]} />
      </AppProvider>,
    );

    const heading = screen.getByRole('heading', {
      name: /Looks like there are no recently viewed trips/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
