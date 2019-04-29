import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Index = () => (
  <div>
    <Head>
      <title>Mario Beltrán Alarcón</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="Mario's Portfolio" />
      <meta name="keywords" content="Web Developer" />
      <meta name="author" content="Mario Beltrán Alarcón" />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>

    <div className="root">
      <div className="wrapper">
        <img src="/static/avatar.png" alt="avatar" className="avatar" />
        <div className="main-box">
          <h1 className="main-heading">Mario Beltrán Alarcón</h1>
        </div>

        <div className="social-networks">
          <a href="mailto:belco90@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/Belco90" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/mario-ba-90/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/Belco90" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
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

      .wrapper > *:not(:first-child) {
        margin-top: 4rem;
      }

      .avatar {
        width: 150px;
        height: 150px;
        border-radius: 100%;
      }

      .main-box {
        padding: 0 4rem;
        border-top: solid 1px white;
        border-bottom: solid 1px white;
      }

      .main-heading {
        margin: 4rem 0;
      }

      .social-networks {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
      }

      .social-networks a {
        color: white;
        font-size: 2rem;
        transition: transform 0.2s;
      }

      .social-networks a:hover {
        transform: scale(1.2);
      }

      @media screen and (max-width: 736px) {
        .main-heading {
          font-size: 1.75rem;
          line-height: 1.4;
        }
      }
    `}</style>
  </div>
);

export default Index;
