class ArticleListViewService {
  constructor(viewService, articlePrevViewModelBuilder, articleStore) {
    this.viewService = viewService
    this.articlePrevViewModelBuilder = articlePrevViewModelBuilder
    this.articleStore = articleStore
  }

  getRenderedView(articleId) {
    const articleContents = this.articleStore.getById(articleId)

    const viewModel = this.articlePrevViewModelBuilder
      .createInstance()
      .setHref('fakeHref')
      .setTitle(articleContents.title)
      .setDate(articleContents.date)
      .setReadingTime(articleContents.readingTime)
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

  const articleStore = diContainer.getInstance('lib/articles-store-factory')()

  return new ArticleListViewService(
    viewService,
    articlePrevViewModelBuilder,
    articleStore
  )
}
