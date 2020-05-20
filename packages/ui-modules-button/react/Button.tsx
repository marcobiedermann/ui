import classNames from 'classnames';
import React, { FC } from 'react';
import styles from '../button.css';

export interface ButtonProps {
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

export const Button: FC<ButtonProps> = (props) => {
  const { type = 'button', ...otherProps } = props;

  return <button className={classNames(styles.button)} type={type} {...otherProps} />;
};

export default Button;
