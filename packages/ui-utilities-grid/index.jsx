import classNames from 'classnames';
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

const GridRow = ({ children }) => (
  <div className={styles.grid__row}>
    {children}
  </div>
);

GridRow.propTypes = {
  children: PropTypes.node,
};

GridRow.defaultProps = {
  children: null,
};

const GridColumn = ({ children, span }) => (
  <div
    className={classNames(styles.grid__column, {
      [styles[`grid__column--${span}`]]: span,
    })}
  >
    {children}
  </div>
);

GridColumn.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
};

GridColumn.defaultProps = {
  children: null,
  span: 0,
};

export default Grid;
export {
  GridRow,
  GridColumn,
};
