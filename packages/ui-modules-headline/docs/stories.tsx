/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import '../headline.css';

export default {
  title: 'Headline',
};

export const H1 = () => <h1>{text('Content', 'Headline H1')}</h1>;

export const H2 = () => <h2>{text('Content', 'Headline H2')}</h2>;

export const H3 = () => <h3>{text('Content', 'Headline H3')}</h3>;

export const H4 = () => <h4>{text('Content', 'Headline H4')}</h4>;

export const H5 = () => <h5>{text('Content', 'Headline H5')}</h5>;

export const H6 = () => <h6>{text('Content', 'Headline H6')}</h6>;
