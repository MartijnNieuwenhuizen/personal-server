const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const bootstrap = require('./bootstrap')

const app = express()

// Configure view renderer
const projectBaseDir = path.resolve(`${__dirname}`)

nunjucks.configure(projectBaseDir, {
  express: app,
  trimBlocks: true,
  lstripBlocks: true,
  throwOnUndefined: true,
})
app.set('view engine', 'nunjucks')

// Bootstrap of the application
bootstrap.execute()

// Routes
routes.register(app)

// statics
app.use(express.static('public'))

// Launch app
app.listen(5000)
