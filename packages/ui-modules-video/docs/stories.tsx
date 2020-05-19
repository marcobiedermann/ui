/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import '../video.css';

export default {
  title: 'Video',
};

export const Default = () => (
  <video autoPlay={boolean('autoplay', false)} muted={boolean('muted', false)}>
    <source src={text('src', 'path/to/video.mp4')} type="video/mp4" />
  </video>
);
