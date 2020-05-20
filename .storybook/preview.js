import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

addDecorator(withInfo);
addDecorator(withKnobs);
