import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../grid.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {}

const Grid: FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.grid)} {...otherProps} />;
};

export default Grid;
