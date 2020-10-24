import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../media.css';

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {}

const Media: FC<MediaProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media)} {...otherProps} />;
};

export default Media;
