/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable */

import './style.css';

storiesOf('Grid/1.0.0', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <div className="grid">
      {text('Content', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?')}
    </div>
  ));
