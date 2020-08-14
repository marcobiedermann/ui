import { Meta, Story } from '@storybook/react';
import React, { VideoHTMLAttributes } from 'react';
import '../video.css';

export default {
  title: 'Video',
} as Meta;

const Template: Story<VideoHTMLAttributes<HTMLVideoElement>> = (args) => (
  <video {...args}>
    <source src={args.src} type="video/mp4" />
  </video>
);

export const Default = Template.bind({});

Default.args = {
  autoPlay: false,
  muted: false,
  src: 'path/to/video.mp4',
};
