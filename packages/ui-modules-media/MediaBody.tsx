import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from '../media.css';

interface MediaBodyProps {
  children: ReactNode;
  className?: string;
}

function MediaBody(props: MediaBodyProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.media__body)} {...otherProps} />;
}

export type { MediaBodyProps };
export default MediaBody;
