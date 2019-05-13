class PageViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      body: null,
      title: '',
      styles: [],
      scripts: [],
    }

    return this
  }

  setBody(body) {
    this.result.body = body
    return this
  }

  setTitle(title) {
    this.result.title = title
    return this
  }

  setStyles(styles) {
    this.result.styles = styles
    return this
  }

  setScripts(scripts) {
    this.result.scripts = scripts
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new PageViewModelBuilder()
