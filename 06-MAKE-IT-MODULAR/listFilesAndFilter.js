const fs = require('fs')
const path = require('path')

function listFilesAndFilter( pathDir, extension, callback ) {

  fs.readdir( pathDir, (err, list) => {
    if (err) {
      return callback(err)
    }
    const filteredByExtension = list.filter( fileName => {
      return path.extname(fileName) === '.'+extension
    })

    callback(null, filteredByExtension)

  })
}

module.exports = listFilesAndFilter