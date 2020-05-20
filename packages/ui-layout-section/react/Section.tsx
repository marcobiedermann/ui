import React, { FC } from 'react';
import styles from '../section.css';

export const Section: FC = (props) => {
  return <section className={styles.section} {...props} />;
};

export default Section;
