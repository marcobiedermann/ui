/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../base.css';

storiesOf('Body', module)
  .addDecorator(withKnobs)
  .add('default', () => <div>{text('Content', 'Body')}</div>);
