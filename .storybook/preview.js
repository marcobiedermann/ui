import '../packages/ui-layout-base/base.css';
import '../packages/ui-themes-default/theme.css';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
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
  },
  layout: 'padded',
};
