import { Meta } from '@storybook/react';
import React from 'react';
import '../table.css';

export default {
  title: 'Table',
} as Meta;

export const Default = () => (
  <table>
    <thead>
      <tr>
        <th>Headline 1</th>
        <th>Headline 2</th>
        <th>Headline 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
    </tbody>
  </table>
);
