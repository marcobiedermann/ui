/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Anchor', module)
  .addWithStaticMarkup('default', () => (
    <a href="#">Anchor</a>
  ));
