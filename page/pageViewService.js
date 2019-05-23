const diContainer = require('../lib/di-container')

const config = require('../page/pageConfig')
const pageViewModelBuilder = require('../page/pageViewModelBuilder')()

const viewRenderer = require('../lib/view-service')(diContainer)('page/page')

module.exports = viewModel => {
  const customStyles = viewModel.styles ? viewModel.styles : []
  const customScripts = viewModel.scripts ? viewModel.scripts : []

  const pageViewModel = pageViewModelBuilder
    .createInstance()
    .setBody(viewModel.body)
    .setTitle(viewModel.title || config.title)
    .setStyles([...config.styles, ...customStyles])
    .setScripts([...config.scripts, ...customScripts])
    .getResult()

  return viewRenderer.getRenderedView(pageViewModel)
}
