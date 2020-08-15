import React, { FC } from 'react';
import styles from '../footer.css';

const Footer: FC = (props) => {
  return <footer className={styles.footer} role="contentinfo" {...props} />;
};

export default Footer;
