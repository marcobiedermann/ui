import { Story } from '@storybook/react';
import React from 'react';
import SEO, { SEOProps } from '../react/SEO';

export default {
  component: SEO,
  title: 'Utilities/SEO',
};

const Template: Story<SEOProps> = (args) => <SEO {...args} />;

export const Default = Template.bind({});

Default.args = {
  description: 'Meta Description',
  title: 'Page Title',
};
