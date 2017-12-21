import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Footer = props => (
  <footer className="footer" role="contentinfo">
    {props.children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
