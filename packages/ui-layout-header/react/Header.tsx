import React, { FC, HTMLAttributes } from 'react';
import styles from '../header.css';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = (props) => {
  return <header className={styles.header} role="banner" {...props} />;
};

export default Header;
