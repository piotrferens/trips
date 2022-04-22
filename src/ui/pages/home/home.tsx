import { Typography } from 'ui/atoms';
import { TripList } from 'ui/organisms';

import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <div>{trips ? <TripList trips={trips} /> : <Typography el="h1">Something went wrong</Typography>}</div>
);
