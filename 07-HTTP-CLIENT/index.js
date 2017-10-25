const http = require('http')
const path = process.argv[2]

http.get(path, (resp) => {
  resp.on('data', (data) => {
    console.log(data.toString())
  })
})

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
