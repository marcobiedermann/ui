import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Object } from '../react';
import { ObjectProps } from '../react/Object';

export default {
  component: Object,
  title: 'Media/Object',
} as Meta;

const Template: Story<ObjectProps> = (args) => <Object {...args} />;

export const Default = Template.bind({});

Default.args = {
  direction: 'left',
};
