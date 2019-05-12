const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const app = express()

// Configure view renderer
const projectBaseDir = path.resolve(`${__dirname}`)
nunjucks.configure(projectBaseDir, {
  autoescape: true,
  express: app,
})

// Routes
routes.register(app)

// Launch app
app.listen(5000)
