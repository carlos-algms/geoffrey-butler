const path = require('path');
const nodeExternals = require('webpack-node-externals');

/**
 * @type {import('webpack').ConfigurationFactory}
 */
const configFactory = () => {
	/** @type {import('webpack').Configuration} */
	const config = {
		entry: path.resolve(__dirname, 'server', 'index.ts'),
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.json'],
		},
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, './lib'),
			library: 'server',
			libraryTarget: 'umd',
		},
		target: 'node',
		node: {
			__dirname: true,
			__filename: true,
		},
		externals: [
			nodeExternals({
				whitelist: [],
			}),
		],

		devtool: 'source-map',

		module: {
			rules: [
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					loader: 'ts-loader',
				},
			],
		},
		plugins: [],
	};

	return config;
};

module.exports = configFactory;
