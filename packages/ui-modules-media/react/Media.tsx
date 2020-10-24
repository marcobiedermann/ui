import React, { FC, HTMLAttributes } from 'react';
import styles from '../media.css';

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {}

const Media: FC<MediaProps> = (props) => {
  return <div className={styles.media} {...props} />;
};

export default Media;
