import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Grid = props => (
  <div className="grid">
    {props.children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
