/* eslint-disable import/no-extraneous-dependencies */
import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import Embed from '../react/Embed';

export default {
  component: Embed,
  title: 'Embed',
};

export const Default = () => (
  <Embed
    aspectRatio={select(
      'Aspect Ratio',
      {
        '16-9': '16-9',
        '4-3': '4-3',
      },
      '16-9',
    )}
  >
    <iframe src={text('Src', '/')} title={text('Title', '@marcobiedermann/ui')} />
  </Embed>
);
