module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config, { configType }) => {
    const ruleCssIndex = config.module.rules.findIndex((rule) => rule.test.toString() === '/\\.css$/');

    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName: configType === 'PRODUCTION' ? '[local]--[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
        };
      }
      return item;
    });

    return config;
  },
};
