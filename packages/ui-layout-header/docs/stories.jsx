/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Header from '../react/Header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Header>
      {text('Content', 'Header')}
    </Header>
  ));
