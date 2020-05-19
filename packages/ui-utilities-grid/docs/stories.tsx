/* eslint-disable import/no-extraneous-dependencies */
import { number, text } from '@storybook/addon-knobs';
import React from 'react';
import Grid from '../react';

const { Column, Row } = Grid;

export default {
  component: Grid,
  title: 'Grid',
};

export const Default = () => (
  <Grid>
    <Row>
      <Column span={number('Span Left', 6)}>{text('Content Colum Left', 'Colum Left')}</Column>
      <Column span={number('Span Right', 6)}>{text('Content Colum Right', 'Colum Right')}</Column>
    </Row>
  </Grid>
);
