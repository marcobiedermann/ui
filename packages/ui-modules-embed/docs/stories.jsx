/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Embed from '../index';

storiesOf('Embed', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Embed
      aspectRatio={select('Aspect Ratio', {
        '16-9': '16-9',
        '4-3': '4-3',
      }, '16-9')}
    >
      <iframe
        src={text('Src', '/')}
        title={text('Title', '@marcobiedermann/ui')}
      />
    </Embed>
  ));
