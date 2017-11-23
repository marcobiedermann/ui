/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Image/1.0.0', module)
  .addWithStaticMarkup('default', () => (
    <img src="https://via.placeholder.com/800x600" alt="Placeholder" width="800" height="600" />
  ));
