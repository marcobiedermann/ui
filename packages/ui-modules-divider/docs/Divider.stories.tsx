import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import '../divider.css';

export default {
  title: 'Divider',
} as Meta;

const Template: Story<HTMLAttributes<HTMLHRElement>> = (args) => <hr {...args} />;

export const Default = Template.bind({});
