import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Footer = ({ children }) => (
  <footer className={styles.footer} role="contentinfo">
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
