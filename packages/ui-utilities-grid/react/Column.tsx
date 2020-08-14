import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from '../grid.css';

export interface ColumnProps {
  children: ReactNode;
  span: number;
}

export const Column: FC<ColumnProps> = (props) => {
  const { span, ...otherProps } = props;

  return (
    <div
      className={classNames(styles.grid__column, {
        [styles[`grid__column--${span}`]]: span,
      })}
      {...otherProps}
    />
  );
};

export default Column;
