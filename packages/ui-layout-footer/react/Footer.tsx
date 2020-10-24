import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../footer.css';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = (props) => {
  const { className, ...otherProps } = props;

  return <footer className={classNames(className, styles.footer)} role="contentinfo" {...otherProps} />;
};

export default Footer;
