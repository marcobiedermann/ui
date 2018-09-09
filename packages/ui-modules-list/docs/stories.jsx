/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import '../style.css';

storiesOf('List', module)
  .addWithStaticMarkup('definition list', () => (
    <dl>
      <dt>
        Coffee
      </dt>
      <dd>
        Black hot drink
      </dd>
      <dt>
        Milk
      </dt>
      <dd>
        White cold drink
      </dd>
    </dl>
  ))
  .addWithStaticMarkup('ordered list', () => (
    <ol>
      <li>
        List Item 1
      </li>
      <li>
        List Item 2
        <ol>
          <li>
            Sub List Item 1
          </li>
          <li>
            Sub List Item 2
          </li>
          <li>
            Sub List Item 3
          </li>
        </ol>
      </li>
      <li>
        List Item 3
      </li>
      <li>
        List Item 4
      </li>
      <li>
        List Item 5
      </li>
    </ol>
  ))
  .addWithStaticMarkup('unordered list', () => (
    <ul>
      <li>
        List Item 1
      </li>
      <li>
        List Item 2
        <ul>
          <li>
            Sub List Item 1
          </li>
          <li>
            Sub List Item 2
          </li>
          <li>
            Sub List Item 3
          </li>
        </ul>
      </li>
      <li>
        List Item 3
      </li>
      <li>
        List Item 4
      </li>
      <li>
        List Item 5
      </li>
    </ul>
  ));
