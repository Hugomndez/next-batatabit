import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='ltr' lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
