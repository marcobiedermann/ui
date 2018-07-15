import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = ({ children }) => (
  <header className="header" role="banner">
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
