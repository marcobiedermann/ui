/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-enable */

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
