/* eslint-disable import/no-extraneous-dependencies */
import { number } from '@storybook/addon-knobs';
import React from 'react';
import '../canvas.css';

export default {
  title: 'Canvas',
};

export const Default = () => <canvas width={number('width', '800')} height={number('height', '600')} />;
