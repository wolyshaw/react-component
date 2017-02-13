const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'dist', 'static', 'index.html'))
})

app.listen(8000, err => {
	console.log('server online 8000')
})
