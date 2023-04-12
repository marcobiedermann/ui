import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../grid.css';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {}

const Row: FC<RowProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.grid__row)} {...otherProps} />;
};

export default Row;
