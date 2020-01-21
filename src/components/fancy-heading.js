import React from 'react';

import styles from './fancy-heading.module.css';

// FIXME: put accents on last names
const FancyHeading = () => (
  <h1 className={styles.root}>
    <div className={styles.showUp}>
      <span>Mario </span>
    </div>
    <div className={styles.highlight}>Bel</div>
    <div className={styles.showUp}>
      <span>tran </span>
    </div>
    <div className={styles.showUp}>
      <span>Alar</span>
    </div>
    <div className={styles.highlight}>co</div>
    <div className={styles.showUp}>
      <span>n</span>
    </div>
  </h1>
);

export default FancyHeading;
