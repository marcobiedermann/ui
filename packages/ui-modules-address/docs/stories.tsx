/* eslint-disable import/no-extraneous-dependencies */
import { text } from '@storybook/addon-knobs';
import React from 'react';
import '../address.css';

export default {
  title: 'Address',
};

export const Default = () => (
  <address itemScope itemType="http://schema.org/Organization">
    <span itemProp="name">{text('Company', 'Company Name')}</span>
    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
      <span itemProp="streetAddress">{text('Street Address', 'Street Address')}</span>
      <br />
      <span itemProp="postalCode">{text('Postal Code', 'Postal Code')}</span>{' '}
      <span itemProp="addressLocality">{text('City', 'City Name')}</span>
      <br />
      <span itemProp="addressCountry">{text('Country', 'Country')}</span>
    </div>
  </address>
);
