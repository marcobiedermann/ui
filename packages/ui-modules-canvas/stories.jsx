/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
/* eslint-enable */

import './index.css';

storiesOf('Canvas/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <canvas width={number('width', '800')} height={number('height', '600')} />
  ));
