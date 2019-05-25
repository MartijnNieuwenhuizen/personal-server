const express = require('express')
const router = express.Router()

const articleStore = require('./lib/articles-store-factory')()

// View service
const homeViewService = require('./areas/home/home-view-service')
const playgroundViewService = require('./areas/playground/playground-view-service')
const articleViewService = require('./areas/article/article-view-service')

/**
 * @param {Object} app
 */
function register(app) {
  router.get('/', homeViewService)
  router.get('/playground', playgroundViewService)

  articleStore
    .getAllIds()
    .map(articleId => articleStore.getById(articleId))
    .map(articleData => articleData.id)
    .map(articleId => router.get(`/article/${articleId}`, articleViewService))

  app.use(router)
}

module.exports = { register }
