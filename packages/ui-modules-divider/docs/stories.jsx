/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import '../style.css';

storiesOf('Divider', module)
  .addWithStaticMarkup('default', () => (
    <hr />
  ));
