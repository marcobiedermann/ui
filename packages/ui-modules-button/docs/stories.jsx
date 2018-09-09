/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from '../index';

storiesOf('Button/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Button
      disabled={boolean('Disabled', false)}
    >
      {text('Content', 'Button')}
    </Button>
  ));
