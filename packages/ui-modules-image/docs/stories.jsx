/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
/* eslint-enable */

import '../style.css';

storiesOf('Image/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <img src={text('src', 'https://via.placeholder.com/800x600')} alt={text('alt', 'Placeholder')} width={number('width', '800')} height={number('height', '600')} />
  ));
