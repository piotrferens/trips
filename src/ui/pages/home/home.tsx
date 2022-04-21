import { Typography } from 'ui/atoms';
import { Container } from 'ui/template';

import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <Container>
    {trips ? (
      trips.map((trip) => <div key={trip.id}>{trip.title}</div>)
    ) : (
      <Typography el="h1">Something went wrong</Typography>
    )}
    <Typography el="h1" align="center" color="gray">
      H1 title
    </Typography>
    <Typography el="h2" align="right" color="yellow">
      H2 title
    </Typography>
    <Typography el="h3" align="center">
      H3 went wrong
    </Typography>
    <Typography el="p" fontWeight="900">
      P title went wrong
    </Typography>
  </Container>
);
