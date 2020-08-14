import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '../react/Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
