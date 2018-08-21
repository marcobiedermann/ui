import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Header = ({ children }) => (
  <header className={styles.header} role="banner">
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
