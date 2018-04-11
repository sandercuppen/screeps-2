import { Configuration, DefinePlugin, optimize } from 'webpack';
import { join, resolve } from 'path';

export default (options: EnvOptions): Configuration => {
	const ENV = options.ENV || 'dev';
	const ROOT = options.ROOT || __dirname;
	const MinifyPlugin = require('babel-minify-webpack-plugin');
	const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
	const CleanWebpackPlugin = require('clean-webpack-plugin');
	const CopyWebpackPlugin = require('copy-webpack-plugin');
	const ScreepsSourceMapToJson = require('../lib/screeps-webpack-sources').default;
	const DefineConfig = {
		PRODUCTION: JSON.stringify(options.ENV === 'production'),
		__BUILD_TIME__: JSON.stringify(Date.now()),
	};
	return {
		entry: {
			main: './src/main.ts',
		},
		output: {
			devtoolModuleFilenameTemplate: '[resource-path]',
			filename: 'main.js',
			libraryTarget: 'commonjs2',
			path: join(ROOT, 'dist', ENV),
			pathinfo: false,
			sourceMapFilename: '[file].map.js',
		},
		externals: {
			'main.js.map': 'main.js.map',
			config: 'config',
		},
		node: {
			Buffer: false,
			__dirname: false,
			__filename: false,
			console: true,
			global: true,
			process: false,
		},
		resolve: {
			alias: {
				// 这里需要个app.js里保持一致
				Enums: resolve(ROOT, 'enmus'),
			},
			extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
		},
		devtool: false,
		target: 'node',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
				},

				{
					test: /\.tsx?$/,
					exclude: [join(ROOT, 'src/snippets')],
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin([`dist/${options.ENV}/*`], { root: options.ROOT }),
			// new ForkTsCheckerWebpackPlugin({ ignoreDiagnostics: [2451, 2687, 6133] }),
			// new CopyWebpackPlugin([{ from: join(ROOT, 'src/config.js') }, { from: join(ROOT, 'src/commands.js') }]),
			// new optimize.ModuleConcatenationPlugin(),
			// new MinifyPlugin(),
			new DefinePlugin(DefineConfig),
			new ScreepsSourceMapToJson(),
		].filter(Boolean),
		watchOptions: {
			ignored: /backup/,
			aggregateTimeout: 300,
		},
	};
};
