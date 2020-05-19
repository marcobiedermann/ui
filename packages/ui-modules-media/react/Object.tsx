import classNames from 'classnames';
import React, { FC } from 'react';
import styles from '../media.css';

export interface ObjectProps {
  direction?: 'left' | 'right';
}

export const Object: FC<ObjectProps> = (props) => {
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

export default Object;
