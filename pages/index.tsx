import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Trips } from "./api/trips";

const Home: NextPage<{ data: Trips }> = ({ data }) => {
  return (
    <div>
      <p>Hello</p>
      {data.map((trip) => (
        <div key={trip.id}>{trip.title}</div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`).then((res) =>
    res.json()
  );


  return {
    props: { data },
  };
};

export default Home;
