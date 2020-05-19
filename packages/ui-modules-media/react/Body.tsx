import React, { FC } from 'react';
import styles from '../media.css';

export const Body: FC = (props) => {
  return <div className={styles.media__body} {...props} />;
};

export default Body;
