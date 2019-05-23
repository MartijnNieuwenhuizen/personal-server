class ArticleListViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      articles: [],
    }

    return this
  }

  setArticles(articles) {
    this.result.articles = articles
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new ArticleListViewModelBuilder()
