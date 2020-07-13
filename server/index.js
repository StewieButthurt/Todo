const port = process.env.PORT || 3000
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('dist/build'))
app.listen(port)