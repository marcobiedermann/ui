import { Meta, Story } from '@storybook/react';
import React from 'react';
import Media from '.';

export default {
  component: Media,
  title: 'Media/Media',
} as Meta;

const Template: Story = (args) => (
  <Media>
    <Media.Object direction={args.direction}>
      <img src="https://via.placeholder.com/48x48" alt="Media Object" />
    </Media.Object>
    <Media.Body>{args.children}</Media.Body>
  </Media>
);

export const Default = Template.bind({});

Default.args = {
  direction: 'left',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis ipsam quo omnis dolore quidem esse dignissimos eum laborum adipisci, consequuntur tenetur excepturi labore, ullam animi ut saepe reiciendis ad?',
};
