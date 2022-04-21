import { Container } from 'ui/template';
import { HomeProps } from './home.types';

export const Home = ({ trips }: HomeProps) => (
  <Container>{trips ? trips.map((trip) => <div key={trip.id}>{trip.title}</div>) : 'Something went wrong'}</Container>
);
