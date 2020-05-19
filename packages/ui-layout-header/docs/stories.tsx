/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Header from '../react/Header';

export default {
  component: Header,
  title: 'Header',
};

export const Default = () => <Header>{text('Content', 'Header')}</Header>;
