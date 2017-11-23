/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Anchor/1.0.0', module)
  .addWithStaticMarkup('default', () => (
    <a href="/ui">Anchor</a>
  ));
