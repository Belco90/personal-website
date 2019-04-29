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

    <div className="root">
      <div className="wrapper">
        <img src="/static/avatar.png" alt="avatar" className="avatar" />
        <div className="main-box">
          <h1>Mario Beltrán Alarcón</h1>
        </div>
      </div>
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #1b1f22;
        color: white;
      }
    `}</style>

    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .wrapper {
        padding: 3rem 2rem;
        display: flex;
        align-items: center;
        align-self: center;
        flex-direction: column;
        max-width: 100%;
        text-align: center;
      }

      .avatar {
        width: 150px;
        height: 150px;
        border-radius: 100%;
      }

      .main-box {
        margin-top: 4rem;
        padding: 0 4rem;
        border-top: solid 1px white;
        border-bottom: solid 1px white;
      }

      .main-box h1 {
        margin: 4rem 0;
      }
    `}</style>
  </div>
);

export default Index;
