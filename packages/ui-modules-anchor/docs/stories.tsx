/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import '../anchor.css';

export default {
  title: 'Anchor',
};

export const Default = () => <a href="/ui">{text('Content', 'Anchor')}</a>;
