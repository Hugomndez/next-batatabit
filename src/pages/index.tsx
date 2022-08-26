import { Exchange, Plans, Poster, ProductDetails } from 'components';
import { Footer, Header, Main } from 'layout';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18Conf = await serverSideTranslations(locale!, [
    'common',
    'header',
    'exchange',
    'productDetails',
    'poster',
    'plans',
  ]);

  return {
    props: { ...i18Conf },
  };
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Batatabit</title>
        <meta
          name="description"
          content="Batatabit created using NextJS and deployed with Vercel."
        />
      </Head>

      <Header />
      <Main>
        <Exchange />
        <ProductDetails />
        <Poster />
        <Plans />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
