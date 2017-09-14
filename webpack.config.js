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
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
};
