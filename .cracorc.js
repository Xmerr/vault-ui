// craco.config.js
const path = require(`path`);

const aliases = {
    '@': './src',
    '@api': './src/api',
    '@app': './src/app',
    '@assets': './src/assets',
    '@elements': './src/elements',
    '@global': './src/global',
    '@helpers': './src/helpers',
    '@modules': './src/modules',
};

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

module.exports = {
    webpack: {
        alias: resolvedAliases,
    },
};
