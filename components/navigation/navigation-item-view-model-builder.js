class NavigationViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      label: '',
      href: '',
      active: false,
    }

    return this
  }

  setLabel(label) {
    this.result.label = label
    return this
  }

  setHref(href) {
    this.result.href = href
    return this
  }

  setActive(active) {
    this.result.active = active
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new NavigationViewModelBuilder()
