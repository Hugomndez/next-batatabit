import type { NextPage } from 'next';
import Head from 'next/head';
import { Exchange, Plans, Poster, ProductDetail } from '../components';
import { Footer, Header, Main } from '../layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Batatabit</title>
        <meta
          name='description'
          content='Batatabit created using NextJS and deployed with Vercel.'
        />
      </Head>

      <Header />
      <Main>
        <Exchange />
        <ProductDetail />
        <Poster />
        <Plans />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
