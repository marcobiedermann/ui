import { Meta, Story } from '@storybook/react';
import React from 'react';
import Footer from '../react/Footer';

export default {
  component: Footer,
  title: 'Layout/Footer',
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Footer Content',
};
