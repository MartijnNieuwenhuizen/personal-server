const path = require('path')
const pageViewService = require('../page/pageViewService')

module.exports = (res, templateDir, viewModel) => {
  const projectBaseDir = path.resolve(`${__dirname}/../`)
  const templatePath = `${projectBaseDir}/areas/${templateDir}/${templateDir}.njk`
  const pageBaseDir = `${projectBaseDir}/page/page.njk`

  const pageViewModel = pageViewService(viewModel, templatePath)

  res.render(pageBaseDir, { viewModel: pageViewModel })
}
