/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Section from '../react/Section';

export default {
  component: Section,
  title: 'Section',
};

export const Default = () => <Section>{text('Content', 'Section')}</Section>;
