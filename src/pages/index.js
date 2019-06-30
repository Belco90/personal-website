import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import SEO from '../components/Seo';
import Avatar from '../components/Avatar';

import './index.css';

const Index = () => (
  <React.Fragment>
    <SEO title="Home" />

    <div className="root">
      <div className="wrapper">
        <Avatar />
        <div className="main-box">
          <h1 className="main-heading">Mario Beltrán Alarcón</h1>
        </div>

        <div className="social-networks">
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
            href="https://twitter.com/Belco90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Index;
