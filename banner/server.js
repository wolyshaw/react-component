const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
app.use(compression())
const webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackDevConfig = require('./webpack.config')
const compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, '')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
const PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
