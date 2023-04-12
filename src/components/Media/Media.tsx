import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from '../media.css';
import MediaBody from './MediaBody';
import MediaObject from './MediaObject';

interface MediaProps {
  children: ReactNode;
  className?: string;
}

function Media(props: MediaProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media)} {...otherProps} />;
}

Media.Body = MediaBody;
Media.Object = MediaObject;

export type { MediaProps };
export default Media;
