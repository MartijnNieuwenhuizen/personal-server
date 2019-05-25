class ArticleViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      article: '',
    }

    return this
  }

  setArticle(article) {
    this.result.article = article
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new ArticleViewModelBuilder()
