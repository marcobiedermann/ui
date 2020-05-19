import React, { FC } from 'react';
import styles from '../grid.css';

export const Row: FC = (props) => {
  return <div className={styles.grid__row} {...props} />;
};

export default Row;
