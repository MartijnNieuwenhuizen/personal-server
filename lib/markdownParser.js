const readFile = require('fs').readFileSync
const md = require('node-markdown').Markdown

class MarkdownParser {
  _getFile(fileName, dirName) {
    const filePath = `${dirName}/${fileName}.md`
    return readFile(filePath, 'utf-8')
  }

  parse(fileName, dirName) {
    const file = this._getFile(fileName, dirName)
    return md(file, true)
  }
}

module.exports = () => new MarkdownParser()
