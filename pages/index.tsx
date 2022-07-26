import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Batatabit</title>
        <meta
          name='description'
          content='Project test for NextJS and Vercel stack'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>Hello world!</div>
    </div>
  );
};

export default Home;
