class ArticleViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      navigation: '',
      article: '',
    }

    return this
  }

  setNavigation(navigation) {
    this.result.navigation = navigation
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
