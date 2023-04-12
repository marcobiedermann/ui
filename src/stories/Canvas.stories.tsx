import { Meta, Story } from '@storybook/react';
import React, { CanvasHTMLAttributes } from 'react';
import '../canvas.css';

export default {
  title: 'Canvas',
} as Meta;

const Template: Story<CanvasHTMLAttributes<HTMLCanvasElement>> = (args) => <canvas {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: 800,
  height: 600,
};
