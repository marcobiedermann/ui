/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */

import './index.css';

storiesOf('Footer/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <footer className="footer">
      {text('Content', 'Footer')}
    </footer>
  ));
