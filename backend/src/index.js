const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log('Working!'))