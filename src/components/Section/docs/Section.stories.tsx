import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import Section from '../react/Section';

export default {
  component: Section,
  title: 'Layout/Section',
} as Meta;

const Template: Story<HTMLAttributes<HTMLSelectElement>> = (args) => <Section {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Section',
};
