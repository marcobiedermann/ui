/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import './index.css';

storiesOf('Footer/1.0.0', module)
  .addWithStaticMarkup('default', () => (
    <footer className="footer">
      Footer
    </footer>
  ));
