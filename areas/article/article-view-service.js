const diContainer = require('../../lib/di-container')
const viewService = diContainer.getInstance('lib/view-service')(diContainer)(
  'areas/article/article'
)
const articleViewModelBuilder = diContainer.getInstance(
  'areas/article/article-view-model-builder'
)()
const pageViewService = diContainer.getInstance('page/pageViewService')
const articleStore = diContainer.getInstance('lib/articles-store-factory')()
const navigationViewService = diContainer.getInstance(
  'components/navigation/navigation-view-service'
)(diContainer)

module.exports = (req, res, next) => {
  const articleId = req.url.split('/article/').filter(urlPart => urlPart)
  const articleContents = articleStore.getById(articleId).articleContents

  const viewModel = articleViewModelBuilder
    .createInstance()
    .setNavigation(navigationViewService.getRenderedView('articles-and-blogs'))
    .setArticle(articleContents)
    .getResult()

  const renderedView = viewService.getRenderedView(viewModel)
  const renderedPage = pageViewService({ body: renderedView })

  res.send(renderedPage)
}
