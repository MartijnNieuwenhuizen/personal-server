class ArticleListViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      href: '',
      title: '',
      date: '',
      readingTime: '',
    }

    return this
  }

  setHref(href) {
    this.result.href = href
    return this
  }

  setTitle(title) {
    this.result.title = title
    return this
  }

  setDate(date) {
    this.result.date = date
    return this
  }

  setReadingTime(readingTime) {
    this.result.readingTime = readingTime
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new ArticleListViewModelBuilder()
