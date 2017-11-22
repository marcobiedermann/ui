/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Body', module)
  .addWithStaticMarkup('default', () => (
    <div>Body</div>
  ));
