/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import '../style.css';

storiesOf('Canvas', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <canvas
      width={number('width', '800')}
      height={number('height', '600')}
    />
  ));
