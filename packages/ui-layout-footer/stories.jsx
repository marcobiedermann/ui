/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Footer', module)
  .addWithStaticMarkup('default', () => (
    <footer className="footer">
      Footer
    </footer>
  ));
