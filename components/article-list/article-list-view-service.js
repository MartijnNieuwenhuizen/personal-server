class ArticleListViewService {
  constructor(
    viewService,
    articlePrevViewService,
    articleListViewModelBuilder,
    articleStore
  ) {
    this.viewService = viewService
    this.articlePrevViewService = articlePrevViewService
    this.articleListViewModelBuilder = articleListViewModelBuilder
    this.articleStore = articleStore
  }

  getRenderedView() {
    const articleIds = this.articleStore.getAllIds()

    const articles = articleIds.map(articleId =>
      this.articlePrevViewService.getRenderedView(articleId)
    )

    const viewModel = this.articleListViewModelBuilder
      .createInstance()
      .setArticles(articles)
      .getResult()

    return this.viewService.getRenderedView(viewModel)
  }
}

module.exports = diContainer => {
  const articleListViewModelBuilder = diContainer.getInstance(
    'components/article-list/article-list-view-model-builder'
  )()
  const articlePrevViewService = diContainer.getInstance(
    'components/article-prev/article-prev-view-service'
  )(diContainer)

  const viewService = diContainer.getInstance('lib/view-service')(diContainer)(
    'components/article-list/article-list'
  )

  const articleStore = diContainer.getInstance('lib/articles-store-factory')()

  return new ArticleListViewService(
    viewService,
    articlePrevViewService,
    articleListViewModelBuilder,
    articleStore
  )
}
