import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MediaBody } from '../react';

export default {
  component: MediaBody,
  title: 'Media/MediaBody',
} as Meta;

const Template: Story = (args) => <MediaBody {...args} />;

export const Default = Template.bind({});

Default.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
};
