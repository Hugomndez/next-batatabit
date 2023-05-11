import { dmSans, inter } from 'fonts';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        html {
          --dm-sans-font: ${dmSans.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
