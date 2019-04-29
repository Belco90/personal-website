import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Mario Beltrán Alarcón</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>

    <p>Coming soon</p>

    <style jsx global>{`
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #1b1f22;
        color: white;
      }
    `}</style>
  </div>
);

export default Index;
