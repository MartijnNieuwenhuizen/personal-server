class MarkdownParser {
  constructor(parser) {
    this.parser = parser
  }

  parse(file) {
    return this.parser(file, true)
  }
}

module.exports = () => {
  const md = require('node-markdown').Markdown

  return new MarkdownParser(md)
}
