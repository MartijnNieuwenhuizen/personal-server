const path = require('path')

module.exports = (res, templateDir, data) => {
  const projectBaseDir = path.resolve(`${__dirname}/../`)
  const templatePath = `${projectBaseDir}/areas/${templateDir}/${templateDir}.njk`

  res.render(templatePath, data)
}
