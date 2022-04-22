import { Typography } from 'ui/atoms';
import { Container } from 'ui/template';
import { TripList } from 'ui/organisms';

import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <Container>{trips ? <TripList trips={trips} /> : <Typography el="h1">Something went wrong</Typography>}</Container>
);
