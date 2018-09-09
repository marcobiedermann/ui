/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import '../style.css';

storiesOf('Address', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('default', () => (
    <address
      itemScope
      itemType="http://schema.org/Organization"
    >
      <span itemProp="name">
        {text('Company', 'Company Name')}
      </span>
      <div
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <span itemProp="streetAddress">
          {text('Street Address', 'Street Address')}
        </span>
        <br />
        <span itemProp="postalCode">
          {text('Postal Code', 'Postal Code')}
        </span>
        {' '}
        <span itemProp="addressLocality">
          {text('City', 'City Name')}
        </span>
        <br />
        <span itemProp="addressCountry">
          {text('Country', 'Country')}
        </span>
      </div>
    </address>
  ));
