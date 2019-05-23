const pathModule = require('path')

const projectBaseDir = pathModule.resolve(`${__dirname}/../`)

const getInstance = modulePath => require(`${projectBaseDir}/${modulePath}`)

module.exports = { getInstance }
