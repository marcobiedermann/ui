/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../headline.css';

storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .add('h1', () => (
    <h1>
      {text('Content', 'Headline H1')}
    </h1>
  ))
  .add('h2', () => (
    <h2>
      {text('Content', 'Headline H2')}
    </h2>
  ))
  .add('h3', () => (
    <h3>
      {text('Content', 'Headline H3')}
    </h3>
  ))
  .add('h4', () => (
    <h4>
      {text('Content', 'Headline H4')}
    </h4>
  ))
  .add('h5', () => (
    <h5>
      {text('Content', 'Headline H5')}
    </h5>
  ))
  .add('h6', () => (
    <h6>
      {text('Content', 'Headline H6')}
    </h6>
  ));
