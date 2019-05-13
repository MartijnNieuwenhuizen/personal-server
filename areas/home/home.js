const render = require('../../lib/render')

module.exports = (req, res, next) => {
  const viewModel = {
    styles: ['home.css'],
    title: 'My First Nunjucks Page',
    items: [
      { name: 'item #1' },
      { name: 'item #2' },
      { name: 'item #3' },
      { name: 'item #4' },
    ],
  }

  render(res, 'home', viewModel)
}
