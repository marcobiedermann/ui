import { setOptions } from '@storybook/addon-options';
import { configure, setAddon } from '@storybook/react';
import staticMarkup from 'react-storybook-addon-static-markup';

function loadStories() {
  const contexts = [
    require.context('../packages', true, /stories.*\.jsx$/),
  ];

  contexts.forEach((context) => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}

setAddon(staticMarkup);
setOptions({
  name: '@marcobiedermann/ui',
  url: 'https://github.com/marcobiedermann/ui',
  downPanelInRight: true,
});
configure(loadStories, module);
