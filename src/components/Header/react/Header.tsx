import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../header.css';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = (props) => {
  const { className, ...otherProps } = props;

  return <header className={classNames(className, styles.header)} role="banner" {...otherProps} />;
};

export default Header;
