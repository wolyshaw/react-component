const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require("clean-webpack-plugin") // 清除指定目录
const HtmlWebpackPlugin = require("html-webpack-plugin") // hhtml生成插件

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'react-router'], // 一般放置插件的目录
		bundle: './src/a.js' // 一般放置业务代码
	},
	output: {
		path: './dist',
		filename: '[hash:5].[name].js',
		publicPath: '/',
		chunkFilename: '[hash:5].[name].chunk.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.join(__dirname,'./src'),
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			}
		]
	},
	plugins: [
		new CleanPlugin(['dist'], { // 使用webpack打包时不可打开dist目录否则报错
			root: path.join(__dirname),
			verbose: true
		}),
		new HtmlWebpackPlugin({
			filename: 'static/index.html',
			template: './src/static/index_default.html',
			title: 'webpack',
			keywords: '',
			description: ''
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		})
	]
}
