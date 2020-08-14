import { Meta, Story } from '@storybook/react';
import React from 'react';
import Grid from '../react';

export default {
  component: Grid,
  title: 'Grid/Grid',
} as Meta;

const Template: Story = (args) => <Grid {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Grid Content',
};
