const NormalizedStore = require('./normalized-store')

let instance = null

module.exports = () => {
  if (!instance) {
    instance = new NormalizedStore()
  }

  return instance
}
