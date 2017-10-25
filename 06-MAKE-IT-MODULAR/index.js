const listFilesAndFilter = require('./listFilesAndFilter')
const [ pathDir, extension ] = process.argv.slice(2)

function handleResult (err, filteredFiles) {
  if (err) throw err
  filteredFiles.forEach(fileName => console.log(fileName))
}

listFilesAndFilter(pathDir, extension, handleResult)
