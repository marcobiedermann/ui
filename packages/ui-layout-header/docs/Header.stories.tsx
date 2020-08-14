import { Meta, Story } from '@storybook/react';
import React from 'react';
import Header from '../react/Header';

export default {
  component: Header,
  title: 'Layout/Header',
} as Meta;

const Template: Story<React.HTMLAttributes<HTMLElement>> = (args) => <header {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Header Content',
};
