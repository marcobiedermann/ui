import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import '../address.css';

export default {
  title: 'Address',
} as Meta;

const Template: Story<HTMLAttributes<HTMLElement>> = (args) => (
  <address itemScope itemType="http://schema.org/Organization" {...args}>
    <span itemProp="name">Company Name</span>
    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
      <span itemProp="streetAddress">Street Address</span>
      <br />
      <span itemProp="postalCode">Postal Code</span>, <span itemProp="addressLocality">City Name</span>
      <br />
      <span itemProp="addressCountry">Country</span>
    </div>
  </address>
);

export const Default = Template.bind({});
