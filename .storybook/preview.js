import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    {
      name: 'light',
      value: '#fff',
      default: true,
    },
    {
      name: 'neutral',
      value: '#808080',
    },
    {
      name: 'dark',
      value: '#000',
    },
  ],
});

addDecorator(withInfo);
addDecorator(withKnobs);
