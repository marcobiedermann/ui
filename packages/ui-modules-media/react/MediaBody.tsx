import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../media.css';

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

const MediaBody: FC<BodyProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media__body)} {...otherProps} />;
};

export default MediaBody;
