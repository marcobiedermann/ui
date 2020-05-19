import React, { FC } from 'react';
import styles from '../grid.css';

export const Grid: FC = (props) => {
  return <div className={styles.grid} {...props} />;
};

export default Grid;
