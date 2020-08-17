import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MediaObject } from '../react';
import { MediaObjectProps } from '../react/MediaObject';

export default {
  component: MediaObject,
  title: 'Media/MediaObject',
} as Meta;

const Template: Story<MediaObjectProps> = (args) => <MediaObject {...args} />;

export const Default = Template.bind({});

Default.args = {
  direction: 'left',
};
