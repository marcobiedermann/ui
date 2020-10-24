import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import styles from '../embed.css';

export interface EmbedProps extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: '4-3' | '16-9';
}

const Embed: FC<EmbedProps> = (props: EmbedProps) => {
  const { aspectRatio = '16-9', className, ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.embed, {
        [styles[`embed--${aspectRatio}`]]: aspectRatio,
      })}
      {...otherProps}
    />
  );
};

export default Embed;
