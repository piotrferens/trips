import { Typography } from 'src/ui/atoms';
import { TripList } from 'src/ui/organisms';
import { Container } from 'src/ui/template';

import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <Container>{trips ? <TripList trips={trips} /> : <Typography el="h1">Something went wrong</Typography>}</Container>
);
