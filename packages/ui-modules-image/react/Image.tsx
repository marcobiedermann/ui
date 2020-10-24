import React, { FC, ImgHTMLAttributes } from 'react';
import '../image.css';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image: FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export default Image;
