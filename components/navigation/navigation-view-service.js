class NavigationViewService {
  constructor(
    viewService,
    navigationViewModelBuilder,
    navigationItemViewModelBuilder
  ) {
    this.viewService = viewService
    this.navigationViewModelBuilder = navigationViewModelBuilder
    this.navigationItemViewModelBuilder = navigationItemViewModelBuilder
  }

  getRenderedView(activeId) {
    const articleAndBlogsNavigationItem = this.navigationItemViewModelBuilder
      .createInstance()
      .setLabel('Articles & Blogs')
      .setHref('/')
      .setActive(activeId === 'articles-and-blogs')
      .getResult()

    const playgroundNavigationItem = this.navigationItemViewModelBuilder
      .createInstance()
      .setLabel('Playground')
      .setHref('/playground')
      .setActive(activeId === 'playground')
      .getResult()

    const viewModel = this.navigationViewModelBuilder
      .createInstance()
      .setNavigationItems([
        articleAndBlogsNavigationItem,
        playgroundNavigationItem,
      ])
      .getResult()

    return this.viewService.getRenderedView(viewModel)
  }
}

module.exports = diContainer => {
  const navigationViewModelBuilder = diContainer.getInstance(
    'components/navigation/navigation-view-model-builder'
  )()
  const navigationItemViewModelBuilder = diContainer.getInstance(
    'components/navigation/navigation-item-view-model-builder'
  )()

  const viewService = diContainer.getInstance('lib/view-service')(diContainer)(
    'components/navigation/navigation'
  )

  return new NavigationViewService(
    viewService,
    navigationViewModelBuilder,
    navigationItemViewModelBuilder
  )
}
