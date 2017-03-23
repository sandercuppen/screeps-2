const path     = require('path');
module.exports = {
	entry  : './src/main.js',
	output : {
		path         : path.join(__dirname, "dist"),
		filename     : '[name].js',
		libraryTarget: 'commonjs2',
	},
	devtool: 'source-map',
	module : {
		loaders: [
			{
				test  : /\.js$/,
				loader: 'babel-loader',
				query : {
					presets: [
						require.resolve('babel-preset-react'), // React preset is needed only for flow support.
						require.resolve('babel-preset-es2015'),
						require.resolve('babel-preset-stage-2'),
					],
					plugins: [
						"dynamic-import-webpack"
					]
				},
			},
		],
	},
};