import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../react';
import { ColumnProps } from '../react/Column';

export default {
  component: Column,
  title: 'Grid/Column',
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Column Content',
  span: 6,
};
