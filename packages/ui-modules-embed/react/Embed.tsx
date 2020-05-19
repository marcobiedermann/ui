import classNames from 'classnames';
import React, { FC } from 'react';
import styles from '../embed.css';

export interface EmbedProps {
  aspectRatio?: '4-3' | '16-9';
}

export const Embed: FC = (props) => {
  const { aspectRatio = '16-9', ...otherProps } = props;

  return (
    <div
      className={classNames(styles.embed, {
        [styles[`embed--${aspectRatio}`]]: aspectRatio,
      })}
      {...otherProps}
    />
  );
};

export default Embed;
