export default diContainer => {
  const markdownParser = diContainer.getInstance('lib/markdownParser')
  // .setParsedMarkdown(markdownParser.parse('home', __dirname))
}

// Move this to a "Store" pattern so all the markdown is parsed at compile time!!! :)
