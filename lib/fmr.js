const markDownParser = require('./markdown-parser')()

const filterMarkdownFiles = fileName => fileName.includes('md')
const filterJsonFiles = fileName => fileName.includes('json')
const parseMarkdown = articleAsMarkDown =>
  markDownParser.parse(articleAsMarkDown)
const parseJson = metaAsJson => JSON.parse(metaAsJson)

module.exports = {
  filterMarkdownFiles,
  filterJsonFiles,
  parseMarkdown,
  parseJson,
}
