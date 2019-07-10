/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../anchor.css';

storiesOf('Anchor', module)
  .addDecorator(withKnobs)
  .add('default', () => <a href="/ui">{text('Content', 'Anchor')}</a>);
