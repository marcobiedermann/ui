import classNames from 'classnames';
import React, { FC } from 'react';
import styles from '../media.css';

export interface MediaObjectProps {
  direction?: 'left' | 'right';
}

const MediaObject: FC<MediaObjectProps> = (props: MediaObjectProps) => {
  const { direction = 'left', ...otherProps } = props;

  return (
    <div
      className={classNames(styles.media__object, {
        [styles[`media__object--${direction}`]]: direction,
      })}
      {...otherProps}
    />
  );
};

export default MediaObject;
