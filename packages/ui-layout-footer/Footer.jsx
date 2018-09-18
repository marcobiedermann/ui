import PropTypes from 'prop-types';
import React from 'react';
import styles from './footer.css';

const Footer = ({ children }) => (
  <footer className={styles.footer} role="contentinfo">
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
