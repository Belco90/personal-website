import React from 'react';

import styles from './fancy-heading.module.css';

// FIXME: put accents on last names
const FancyHeading = () => (
  <h1>
    <span className={styles.fullName}>Mario </span>
    <span className={styles.nickname}>Bel</span>
    <span className={styles.fullName}>tran Alar</span>
    <span className={styles.nickname}>co</span>
    <span className={styles.fullName}>n</span>
  </h1>
);

export default FancyHeading;
