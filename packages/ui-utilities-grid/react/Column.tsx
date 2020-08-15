import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from '../grid.css';

export interface ColumnProps {
  children: ReactNode;
  span: number;
}

const Column: FC<ColumnProps> = (props: ColumnProps) => {
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
