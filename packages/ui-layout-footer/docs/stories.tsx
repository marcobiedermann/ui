/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Footer from '../react/Footer';

export default {
  component: Footer,
  title: 'Footer',
};

export const Default = () => <Footer>{text('Content', 'Footer')}</Footer>;
