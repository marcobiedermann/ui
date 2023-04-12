import React, { FC, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../section.css';

export interface SectionProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Section: FC<SectionProps> = (props) => {
  const { className, ...otherProps } = props;

  return <section className={classNames(className, styles.section)} {...otherProps} />;
};

export default Section;
