const render = require('../../lib/render')

module.exports = (req, res, next) => {
  const content = {
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

  render(res, 'playground', content)
}
