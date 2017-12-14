/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */

import Header from '../index';

storiesOf('Header/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Header>
      {text('Content', 'Header')}
    </Header>
  ));
