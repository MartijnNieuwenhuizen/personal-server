const articleStore = require('./lib/articles-store-factory')
const fileReader = require('./lib/file-reader')()
const fmr = require('./lib/fmr')

const { filterMarkdownFiles, parseMarkdown, filterJsonFiles, parseJson } = fmr

let ArticleStore = null

const initializeArticleStore = () => {
  ArticleStore = articleStore()
}

const setArticlesToStore = baseUrl => {
  fileReader
    .getFiles(baseUrl)
    .map(folderName => {
      // Helper function that needs access to the folderName variable
      const getFileContents = articleFileName =>
        fileReader.getFile(`${baseUrl}/${folderName}/${articleFileName}`)

      const folderContents = fileReader.getFiles(`${baseUrl}/${folderName}`)

      const articleContents = folderContents
        .filter(filterMarkdownFiles)
        .map(getFileContents)
        .map(parseMarkdown)[0]

      const meta = folderContents
        .filter(filterJsonFiles)
        .map(getFileContents)
        .map(parseJson)[0]

      return {
        ...meta,
        articleContents,
      }
    })
    .map(article => ArticleStore.set(article))
}

const storeArticles = () => {
  // Make a diConfig and .env change from this!
  setArticlesToStore('articles/drafts/')
  setArticlesToStore('articles/release/')

  // Render them based on the store
  // Loop over store to create the list
  // Test
  // Move to TS
}

const execute = () => {
  initializeArticleStore()
  storeArticles()
}

module.exports = {
  execute,
}
