/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Footer from '../react/Footer';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <Footer>
      {text('Content', 'Footer')}
    </Footer>
  ));
