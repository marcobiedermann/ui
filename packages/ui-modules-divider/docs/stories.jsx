/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../divider.css';

storiesOf('Divider', module)
  .addWithStaticMarkup('default', () => (
    <hr />
  ));
