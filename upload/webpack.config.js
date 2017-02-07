const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const publicPath = 'http://localhost:8080/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
module.exports = {
  entry: ['./index.js', hotMiddlewareScript],
  output: {
    filename: 'index.min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:  ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
      }
    ]
  },
  plugins: [
		new HtmlWebpackPlugin({
	    title: 'upload component',
	    template: path.join(__dirname, 'public', 'index_default.html')
	  }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
