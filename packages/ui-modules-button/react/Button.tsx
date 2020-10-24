import classNames from 'classnames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from '../button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  return <button className={classNames(styles.button)} {...props} />;
};

export default Button;
