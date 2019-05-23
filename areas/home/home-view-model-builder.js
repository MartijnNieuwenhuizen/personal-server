class HomeViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      articlesTitle: '',
      blogsTitle: '',
      articlesList: [],
    }

    return this
  }

  setArticlesTitle(articlesTitle) {
    this.result.articlesTitle = articlesTitle
    return this
  }

  setBlogsTitle(blogsTitle) {
    this.result.blogsTitle = blogsTitle
    return this
  }

  setArticlesList(articlesList) {
    this.result.articlesList = articlesList
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new HomeViewModelBuilder()
