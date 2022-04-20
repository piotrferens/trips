import type { NextPage } from "next";
import { GetServerSideProps } from "next";

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      {data.map((a) => (
        <div key={a.id}>{a.title}</div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`).then((res) =>
    res.json()
  );


  return {
    props: { data },
  };
};
export default Home;
