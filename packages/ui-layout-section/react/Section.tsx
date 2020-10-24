import React, { FC, SelectHTMLAttributes } from 'react';
import styles from '../section.css';

export interface SectionProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Section: FC<SectionProps> = (props) => {
  return <section className={styles.section} {...props} />;
};

export default Section;
