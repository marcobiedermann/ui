/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */

import '../style.css';

storiesOf('Headline/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('h1', () => (
    <h1>
      {text('Content', 'Headline H1')}
    </h1>
  ))
  .addWithStaticMarkup('h2', () => (
    <h2>
      {text('Content', 'Headline H2')}
    </h2>
  ))
  .addWithStaticMarkup('h3', () => (
    <h3>
      {text('Content', 'Headline H3')}
    </h3>
  ))
  .addWithStaticMarkup('h4', () => (
    <h4>
      {text('Content', 'Headline H4')}
    </h4>
  ))
  .addWithStaticMarkup('h5', () => (
    <h5>
      {text('Content', 'Headline H5')}
    </h5>
  ))
  .addWithStaticMarkup('h6', () => (
    <h6>
      {text('Content', 'Headline H6')}
    </h6>
  ));
