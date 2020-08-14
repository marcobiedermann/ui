import { Meta, Story } from '@storybook/react';
import React from 'react';
import Image, { ImageProps } from '../react/Image';

export default {
  component: Image,
  title: 'Image',
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://via.placeholder.com/800x600',
  alt: 'Placeholder',
  width: 800,
  height: 600,
};
