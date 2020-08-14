import { Meta, Story } from '@storybook/react';
import React from 'react';
import Media, { Body, Object } from '../react';

export default {
  component: Media,
  title: 'Media/Media',
} as Meta;

const Template: Story = (args) => (
  <Media>
    <Object direction={args.direction}>Object</Object>
    <Body>{args.children}</Body>
  </Media>
);

export const Default = Template.bind({});

Default.args = {
  direction: 'left',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
};
