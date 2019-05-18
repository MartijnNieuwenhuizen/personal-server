class HomeViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      articlesTitle: '',
      blogsTitle: '',
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

  setParsedMarkdown(parsedMarkdown) {
    this.result.parsedMarkdown = parsedMarkdown
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new HomeViewModelBuilder()
