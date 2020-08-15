import React, { FC } from 'react';
import styles from '../header.css';

const Header: FC = (props) => {
  return <header className={styles.header} role="banner" {...props} />;
};

export default Header;
