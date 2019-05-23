const express = require('express')
const router = express.Router()

const home = require('./areas/home/home-view-service')
const playground = require('./areas/playground/playground-view-service')

/**
 * @param {Object} app
 */
function register(app) {
  router.get('/', home)
  router.get('/playground', playground)

  app.use(router)
}

module.exports = { register }
