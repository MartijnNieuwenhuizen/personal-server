const nunjucks = require('nunjucks')
const config = require('../page/pageConfig')
const pageViewModelBuilder = require('../page/pageViewModelBuilder')()

module.exports = (viewModel, templatePath) => {
  const customStyles = viewModel.styles ? viewModel.styles : []
  const customScripts = viewModel.scripts ? viewModel.scripts : []

  return pageViewModelBuilder
    .createInstance()
    .setBody(nunjucks.render(templatePath, { viewModel }))
    .setTitle(viewModel.title || config.title)
    .setStyles([...config.styles, ...customStyles])
    .setScripts([...config.scripts, ...customScripts])
}
