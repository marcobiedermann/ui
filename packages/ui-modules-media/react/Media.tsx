import React, { FC } from 'react';
import styles from '../media.css';

export const Media: FC = (props) => {
  return <div className={styles.media} {...props} />;
};

export default Media;
