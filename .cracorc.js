// craco.config.js
const path = require(`path`);

const aliases = {
    '@': './src',
    '@assets': './src/assets',
    '@elements': './src/elements',
    '@global': './src/global',
};

const resolvedAliases = Object.fromEntries(
	Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
	webpack: {
		alias: resolvedAliases,
	},
};
