import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure, setAddon } from '@storybook/react';

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

setOptions({
  name: '@marcobiedermann/ui',
  url: 'https://github.com/marcobiedermann/ui',
});
configure(loadStories, module);
