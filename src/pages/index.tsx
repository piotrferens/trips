import type { InferGetServerSidePropsType } from 'next';
import { fetchTrips } from 'api';
import { Home } from 'ui';

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

export type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const HomePage = ({ trips }: HomePageProps) => <Home trips={trips} />;

export default HomePage;
