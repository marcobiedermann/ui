/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Image from '../react';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Image
      src={text('src', 'https://via.placeholder.com/800x600')}
      alt={text('alt', 'Placeholder')}
      width={number('width', '800')}
      height={number('height', '600')}
    />
  ));
