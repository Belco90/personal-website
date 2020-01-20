import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import SEO from '../components/seo';
import Avatar from '../components/avatar';
import Layout from '../components/layout';
import FancyHeading from '../components/fancy-heading';

import styles from './index.module.css';

const Index = () => (
  <Layout>
    <SEO title="Home" />

    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Avatar />

        <div className={`${styles.mainBox} ${styles.fadeInUp}`}>
          <FancyHeading />
          <h3 className={styles.subHeading}>Frontend Web Engineer</h3>
        </div>

        <div className={styles.socialNetworks}>
          <a
            href="mailto:belco90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/Belco90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-ba-90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/belcoDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
