const render = require('../../lib/render')
const homeViewModelBuilder = require('./homeViewModelBuilder')()
const markdownParser = require('../../lib/markdownParser')()

module.exports = (req, res, next) => {
  const viewModel = homeViewModelBuilder
    .createInstance()
    .setArticlesTitle('My Articles')
    .setBlogsTitle('My Title')
    .setParsedMarkdown(markdownParser.parse('home', __dirname))
    .getResult()

  render(res, 'home', viewModel)
}
