/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */

import Footer from '../index';

storiesOf('Footer/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
      <Footer>
        {text('Content', 'Footer')}
      </Footer>
    ));
