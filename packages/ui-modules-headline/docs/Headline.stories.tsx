import { Meta, Story } from '@storybook/react';
import React, { HTMLAttributes } from 'react';
import '../headline.css';

export default {
  title: 'Headline',
} as Meta;

const Template: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Headline H1',
};

export const H2: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h2 {...args} />;

H2.args = {
  children: 'Headline H2',
};

export const H3: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h3 {...args} />;

H3.args = {
  children: 'Headline H3',
};

export const H4: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h4 {...args} />;

H4.args = {
  children: 'Headline H4',
};

export const H5: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h5 {...args} />;

H5.args = {
  children: 'Headline H5',
};

export const H6: Story<HTMLAttributes<HTMLHeadingElement>> = (args) => <h6 {...args} />;

H6.args = {
  children: 'Headline H6',
};
