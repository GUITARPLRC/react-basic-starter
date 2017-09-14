const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				use: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
