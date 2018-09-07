/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import '../style.css';

storiesOf('Divider/1.0.0', module)
  .addWithStaticMarkup('default', () => (
    <hr />
  ));
