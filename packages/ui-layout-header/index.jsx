import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = props => (
  <header className="header" role="banner">
    {props.children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
