/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import '../style.css';

storiesOf('Code/1.0.0', module)
  .addWithStaticMarkup('default', () => (
    <pre>
      <code>
        const a = 42;
        const b = 3;

        console.log(a + b));
      </code>
    </pre>
  ));
