/* eslint-disable import/no-extraneous-dependencies */
import { number, text } from '@storybook/addon-knobs';
import React from 'react';
import Image from '../react/Image';

export default {
  component: Image,
  title: 'Image',
};

export const Default = () => (
  <Image
    src={text('src', 'https://via.placeholder.com/800x600')}
    alt={text('alt', 'Placeholder')}
    width={number('width', 800)}
    height={number('height', 600)}
  />
);
