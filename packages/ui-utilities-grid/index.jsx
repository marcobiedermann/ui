import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Grid = ({ children }) => (
  <div className={styles.grid}>
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
