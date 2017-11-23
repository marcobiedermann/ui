/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { checkA11y } from 'storybook-addon-a11y';
/* eslint-enable */

import './index.css';

storiesOf('Body/1.0.0', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <div>{text('Content', 'Body')}</div>
  ));
