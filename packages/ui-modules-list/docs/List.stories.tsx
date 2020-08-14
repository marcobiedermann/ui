import { Meta } from '@storybook/react';
import React from 'react';
import '../list.css';

export default {
  title: 'List',
} as Meta;

export const DefinitionList = () => (
  <dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
  </dl>
);

export const OrderedList = () => (
  <ol>
    <li>List Item 1</li>
    <li>
      List Item 2
      <ol>
        <li>Sub List Item 1</li>
        <li>Sub List Item 2</li>
        <li>Sub List Item 3</li>
      </ol>
    </li>
    <li>List Item 3</li>
    <li>List Item 4</li>
    <li>List Item 5</li>
  </ol>
);

export const UnorderedList = () => (
  <ul>
    <li>List Item 1</li>
    <li>
      List Item 2
      <ul>
        <li>Sub List Item 1</li>
        <li>Sub List Item 2</li>
        <li>Sub List Item 3</li>
      </ul>
    </li>
    <li>List Item 3</li>
    <li>List Item 4</li>
    <li>List Item 5</li>
  </ul>
);
