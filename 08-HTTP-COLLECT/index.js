const http = require('http')
const path = process.argv[2]

http.get(path, (response) => {
  var listBuffer = ''
  response.on('data', (data) => {
    listBuffer += data.toString()
  }).on('end', () => {
    console.log(listBuffer.length)
    console.log(listBuffer)
  })
})

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
