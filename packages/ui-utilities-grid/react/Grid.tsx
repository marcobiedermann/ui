import React, { FC, HTMLAttributes } from 'react';
import styles from '../grid.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {}

const Grid: FC<GridProps> = (props) => {
  return <div className={styles.grid} {...props} />;
};

export default Grid;
