import React, { FC, HTMLAttributes } from 'react';
import styles from '../grid.css';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {}

const Row: FC<RowProps> = (props) => {
  return <div className={styles.grid__row} {...props} />;
};

export default Row;
