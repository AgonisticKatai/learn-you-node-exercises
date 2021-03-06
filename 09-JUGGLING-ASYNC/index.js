const http = require('http')
const bufferList = require('bl')

let results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

getHttp = (index) => {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bufferList(function (err, data) {
      if (err) {
        console.error(err)
      }
      results[index] = data.toString()
      count++
      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  getHttp(i)
}

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }