import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import styles from '../media.css';

export interface MediaObjectProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'left' | 'right';
}

const MediaObject: FC<MediaObjectProps> = (props: MediaObjectProps) => {
  const { className, direction = 'left', ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.media__object, {
        [styles[`media__object--${direction}`]]: direction,
      })}
      {...otherProps}
    />
  );
};

export default MediaObject;
