/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import '../code.css';

export default {
  title: 'Code',
} as Meta;

const Template: Story<HTMLAttributes<HTMLElement>> = (args) => <code {...args}></code>;

export const Default = Template.bind({});

Default.args = {
  children: 'const a = 42;',
};
