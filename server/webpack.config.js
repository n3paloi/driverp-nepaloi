const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	target: 'node',
	mode: isProduction ? 'production' : 'development',
	devtool: isProduction ? false : 'cheap-module-source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, '../build/server'),
		filename: 'index.js',
		futureEmitAssets: true,
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.json'],
		plugins: [new TsconfigPathsPlugin()],
	},
	plugins: [new CleanWebpackPlugin()],
	externals: [
		nodeExternals({
			allowlist: ['rage-rpc'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(tsx?|js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				options: {
					cacheDirectory: true,
					plugins: [
						'lodash',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-transform-runtime',
						'@babel/plugin-proposal-optional-chaining',
						'@babel/plugin-proposal-nullish-coalescing-operator',
					],
					presets: [
						'@babel/preset-typescript',
						[
							'@babel/preset-env',
							{
								targets: {
									node: 'current',
								},
							},
						],
					],
				},
			},
		],
	},
	optimization: {
		minimize: isProduction,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 6,
						warnings: false,
						comparisons: false,
						inline: 2,
					},
					output: {
						ecma: 6,
						comments: false,
						// Turned on because emoji and regex is not minified properly using default
						// https://github.com/facebook/create-react-app/issues/2488
						ascii_only: true,
					},
				},
				cache: true,
				parallel: true,
				sourceMap: true,
			}),
		],
	},
};
