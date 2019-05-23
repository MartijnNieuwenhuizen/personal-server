class ArticleListViewService {
  constructor(viewService, articlePrevViewModelBuilder) {
    this.viewService = viewService
    this.articlePrevViewModelBuilder = articlePrevViewModelBuilder
  }

  getRenderedView() {
    const viewModel = this.articlePrevViewModelBuilder
      .createInstance()
      .setHref('fakeHref')
      .setTitle('Fake Title')
      .setDate('Fake Date')
      .setReadingTime('Fake reading time')
      .getResult()

    return this.viewService.getRenderedView(viewModel)
  }
}

module.exports = diContainer => {
  const articlePrevViewModelBuilder = diContainer.getInstance(
    'components/article-prev/article-prev-view-model-builder'
  )()

  const viewService = diContainer.getInstance('lib/view-service')(diContainer)(
    'components/article-prev/article-prev'
  )

  return new ArticleListViewService(viewService, articlePrevViewModelBuilder)
}
