import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from '../button.css';

export interface ButtonProps {
  disabled?: boolean;
  children?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { type = 'button', ...otherProps } = props;

  return <button className={classNames(styles.button)} type={type} {...otherProps} />;
};

export default Button;
