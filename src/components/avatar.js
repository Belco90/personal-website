import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './avatar.module.css';

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Mario profile picture"
      className={styles.root}
    />
  );
};

export default Avatar;
