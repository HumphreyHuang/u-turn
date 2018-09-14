const path = require('path');

module.exports = {
	entry: {
		background: path.join(__dirname, '../src/ts/background.ts'),
		setting: path.join(__dirname, '../src/ts/setting.ts'),
		update: path.join(__dirname, '../src/ts/update.ts')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist/js')
	},
	module: {
		rules: [
			{
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	}
};
