const diContainer = require('../../lib/di-container')
const viewService = diContainer.getInstance('lib/view-service')(diContainer)(
  'areas/home/home'
)

const homeViewModelBuilder = diContainer.getInstance(
  'areas/home/home-view-model-builder'
)()
const pageViewService = diContainer.getInstance('page/pageViewService')
const articleListViewService = diContainer.getInstance(
  'components/article-list/article-list-view-service'
)(diContainer)

module.exports = (req, res, next) => {
  const viewModel = homeViewModelBuilder
    .createInstance()
    .setArticlesTitle('My Articles')
    .setBlogsTitle('My Title')
    .setArticlesList(articleListViewService.getRenderedView())
    .getResult()

  const renderedView = viewService.getRenderedView(viewModel)

  const renderedPage = pageViewService({ body: renderedView })
  res.send(renderedPage)
}
