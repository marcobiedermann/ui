import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column, Row } from '../react';

export default {
  component: Row,
  title: 'Grid/Row',
} as Meta;

const Template: Story = (args) => (
  <Row {...args}>
    <Column span={4}>Column 1</Column>
    <Column span={4}>Column 2</Column>
    <Column span={4}>Column 3</Column>
  </Row>
);

export const Default = Template.bind({});

Default.args = {};
