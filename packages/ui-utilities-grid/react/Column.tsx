import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import styles from '../grid.css';

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  span: number;
}

const Column: FC<ColumnProps> = (props: ColumnProps) => {
  const { className, span, ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.grid__column, {
        [styles[`grid__column--${span}`]]: span,
      })}
      {...otherProps}
    />
  );
};

export default Column;
