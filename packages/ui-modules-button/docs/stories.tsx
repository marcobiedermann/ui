/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Button from '../react/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => <Button disabled={boolean('Disabled', false)}>{text('Content', 'Button')}</Button>);
