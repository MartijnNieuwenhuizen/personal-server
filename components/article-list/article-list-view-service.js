class ArticleListViewService {
  constructor(
    viewService,
    articlePrevViewService,
    articleListViewModelBuilder
  ) {
    this.viewService = viewService
    this.articlePrevViewService = articlePrevViewService
    this.articleListViewModelBuilder = articleListViewModelBuilder
  }

  getRenderedView() {
    const fakeArticlesInput = ['a', 'b', 'c']
    const fakeArticles = fakeArticlesInput.map(article =>
      this.articlePrevViewService.getRenderedView()
    )

    const viewModel = this.articleListViewModelBuilder
      .createInstance()
      .setArticles(fakeArticles)
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

  return new ArticleListViewService(
    viewService,
    articlePrevViewService,
    articleListViewModelBuilder
  )
}
