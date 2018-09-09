/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../style.css';

storiesOf('Anchor', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <a href="/ui">
      {text('Content', 'Anchor')}
    </a>
  ));
