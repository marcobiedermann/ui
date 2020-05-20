/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import SEO from '../react';

export default {
  component: SEO,
  title: 'SEO',
};

export const Default = () => (
  <SEO description={text('description', 'Meta Description')} title={text('title', 'Page Title')} />
);
