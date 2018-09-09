/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../style.css';

storiesOf('Body', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <div>
      {text('Content', 'Body')}
    </div>
  ));
