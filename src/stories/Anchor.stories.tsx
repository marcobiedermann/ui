import { Meta, Story } from '@storybook/react';
import React, { AnchorHTMLAttributes } from 'react';
import '../anchor.css';

export default {
  title: 'Anchor',
} as Meta;

const Template: Story<AnchorHTMLAttributes<HTMLAnchorElement>> = (args) => <a {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Link',
  href: '/ui',
  target: '_blank',
};
