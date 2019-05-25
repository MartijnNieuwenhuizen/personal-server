const articleStore = require('./lib/articles-store-factory')

let ArticleStore = null

const initializeArticleStore = () => {
  ArticleStore = articleStore()
}

const storeArticles = () => {
  const article = {
    id: '1',
    foo: 'bar',
  }
  ArticleStore.set(article)
}

const execute = () => {
  initializeArticleStore()
  storeArticles()
}

module.exports = {
  execute,
}
