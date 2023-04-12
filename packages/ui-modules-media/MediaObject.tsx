import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from '../media.css';

interface MediaObjectProps {
  direction?: 'left' | 'right';
  children: ReactNode;
  className?: string;
}

function MediaObject(props: MediaObjectProps): JSX.Element {
  const { className, direction = 'left', ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.media__object, {
        [styles[`media__object--${direction}`]]: direction,
      })}
      {...otherProps}
    />
  );
}

export type { MediaObjectProps };
export default MediaObject;
