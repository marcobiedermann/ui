/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import '../style.css';

storiesOf('Table', module)
  .addWithStaticMarkup('default', () => (
    <table>
      <thead>
        <tr>
          <th>
            Headline 1
          </th>
          <th>
            Headline 2
          </th>
          <th>
            Headline 3
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Cell 1
          </td>
          <td>
            Cell 2
          </td>
          <td>
            Cell 3
          </td>
        </tr>
      </tbody>
    </table>
  ));
