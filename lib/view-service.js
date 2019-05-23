const pathModule = require('path')
const nunjucks = require('nunjucks')

class ViewService {
  constructor(diContainer, template) {
    this.diContainer = diContainer
    this.template = template
  }

  getRenderedView(viewModel) {
    const projectBaseDir = pathModule.resolve(`${__dirname}/../`)
    const templatePath = `${projectBaseDir}/${this.template}.njk`

    return nunjucks.render(templatePath, { viewModel: viewModel })
  }
}

module.exports = diContainer => template =>
  new ViewService(diContainer, template)
