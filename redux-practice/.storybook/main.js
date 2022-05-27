const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-viewport',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })];
    return config;
  },
}
