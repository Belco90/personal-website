import React from 'react';
import PropTypes from 'prop-types';

import styles from './layout.module.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => (
  <div className={styles.root}>
    <main className={styles.content}>{children}</main>
  </div>
);

Layout.propTypes = propTypes;

export default Layout;
