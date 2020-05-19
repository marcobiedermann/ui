import React, { FC } from 'react';
import '../image.css';

export interface ImageProps {
  alt: string;
  height: number;
  src: string;
  width: number;
}

export const Image: FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export default Image;
