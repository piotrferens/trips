import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import { Trip } from '../mocks';

const Home: NextPage<{ data: Array<Trip> }> = ({ data }) => {
  return (
    <div>
      {data.map((trip) => (
        <div key={trip.id}>{trip.title}</div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`).then((res) => res.json());

  return {
    props: { data },
  };
};

export default Home;
