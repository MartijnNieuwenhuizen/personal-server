class NavigationViewModelBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      navigationItems: [],
    }

    return this
  }

  setNavigationItems(navigationItems) {
    this.result.navigationItems = navigationItems
    return this
  }

  getResult() {
    return this.result
  }
}

module.exports = () => new NavigationViewModelBuilder()
