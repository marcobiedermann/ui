/* eslint-disable import/no-extraneous-dependencies */
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import Button from '../react/Button';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => (
  <Button
    disabled={boolean('Disabled', false)}
    type={select('Type', {
      button: 'button',
      reset: 'reset',
      submit: 'submit',
    })}
  >
    text('Content', 'Button')
  </Button>
);
