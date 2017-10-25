const fs = require('fs')
const path = require('path')

const [ pathDir, extension ] = process.argv.slice(2)

fs.readdir(pathDir, (err, list) => {
  if (err) throw err
  list.forEach(fileName => {
    if (path.extname(fileName) === '.' + extension) {
      console.log(fileName)
    }
  })
})

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
