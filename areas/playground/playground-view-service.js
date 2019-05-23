const diContainer = require('../../lib/di-container')
const viewService = require('../../lib/view-service')(diContainer)(
  'areas/playground/playground'
)
const pageViewService = require('../../page/pageViewService')

module.exports = (req, res, next) => {
  const viewModel = {
    title: 'Playground',
    intro: 'Some Fun and play projects, next to ...',
    items: [
      {
        name: 'Spotify random artists selector',
        explanation:
          'Some overkill of functional project principles just to practice. Next to that you have the opportunity to rediscover some nice artists',
        href: '/',
      },
    ],
  }

  const renderedView = viewService.getRenderedView(viewModel)
  const renderedPage = pageViewService({ body: renderedView })

  res.send(renderedPage)
}
