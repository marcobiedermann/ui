module.exports = {
  stories: ['../packages/**/stories.tsx'],
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-viewport/register'],
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

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
