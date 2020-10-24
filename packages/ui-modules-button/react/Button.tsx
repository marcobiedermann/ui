import classNames from 'classnames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from '../button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const { className, ...otherProps } = props;

  return <button className={classNames(className, styles.button)} {...otherProps} />;
};

export default Button;
