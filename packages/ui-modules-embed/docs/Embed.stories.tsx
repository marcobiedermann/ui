import { Meta, Story } from '@storybook/react';
import React from 'react';
import Embed, { EmbedProps } from '../react/Embed';

export default {
  component: Embed,
  title: 'Embed',
} as Meta;

const Template: Story<EmbedProps> = (args) => (
  <Embed {...args}>
    <iframe src="/" title="@marcobiedermann/ui" />
  </Embed>
);

export const Default = Template.bind({});
