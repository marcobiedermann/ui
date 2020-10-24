import React, { FC, HTMLAttributes } from 'react';
import styles from '../media.css';

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

const MediaBody: FC<BodyProps> = (props) => {
  return <div className={styles.media__body} {...props} />;
};

export default MediaBody;
