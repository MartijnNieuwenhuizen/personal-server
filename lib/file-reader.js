const readFile = require('fs')
const pathModule = require('path')

class FileReader {
  constructor() {
    this.projectBaseDir = pathModule.resolve(`${__dirname}/../`)

    // this.getFiles = this.getFiles.bind(this)
  }
  getFile(fileName) {
    const foo = `${this.projectBaseDir}/${fileName}`
    return readFile.readFileSync(foo, 'utf-8')
  }
  getFiles(filePath) {
    const foo = `${this.projectBaseDir}/${filePath}`
    return readFile.readdirSync(foo, 'utf-8')
  }
  // const file = this._getFile(fileName, dirName)
}

module.exports = () => new FileReader()
