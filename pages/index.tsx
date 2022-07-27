import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Batatabit</title>
        <meta
          name='description'
          content='Batatabit created using NextJS and deployed with Vercel.'
        />
      </Head>

      <div>Hello world!</div>
    </div>
  );
};

export default Home;
