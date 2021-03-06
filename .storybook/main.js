const cracoConfig = require('../.cracorc.js');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app'
    ],
    webpackFinal: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...cracoConfig.webpack.alias
        }

        return config;
    }
}