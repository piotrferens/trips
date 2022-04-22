import { Rating, Thumbnail, Typography } from 'ui/atoms';
import { Container } from 'ui/template';

import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <Container>
    {trips ? (
      <div>
        {trips.map((trip) => (
          <div key={trip.id}>
            <div>{trip.title}</div>
            <div style={{ width: 300 }}>
              <Thumbnail src={trip.thumbnailUrl} alt={`${trip.title} thumbnail`} />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <Typography el="h1">Something went wrong</Typography>
    )}
  </Container>
);
