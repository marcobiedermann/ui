import React, { FC, HTMLAttributes } from 'react';
import styles from '../footer.css';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = (props) => {
  return <footer className={styles.footer} role="contentinfo" {...props} />;
};

export default Footer;
