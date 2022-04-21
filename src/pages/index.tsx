import type { InferGetServerSidePropsType } from 'next';
import { fetchTrips } from 'api';

export const getServerSideProps = async () => {
  try {
    const trips = await fetchTrips();

    return {
      props: { trips },
    };
  } catch {
    return { props: { trips: null } };
  }
};

const Home = ({ trips }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>{trips ? trips.map((trip) => <div key={trip.id}>{trip.title}</div>) : 'Something went wrong'}</div>
);

export default Home;
