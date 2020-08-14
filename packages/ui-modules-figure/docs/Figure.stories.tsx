import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import '../figure.css';

export default {
  title: 'Figure',
} as Meta;

const Template: Story<HTMLAttributes<HTMLElement>> = (args) => <figure {...args} />;

export const Default = Template.bind({});
