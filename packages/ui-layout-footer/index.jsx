import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Footer = ({ children }) => (
  <footer className="footer" role="contentinfo">
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
