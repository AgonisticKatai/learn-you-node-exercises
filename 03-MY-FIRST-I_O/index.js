const fs = require('fs')

const path = process.argv[2]

const content = fs.readFileSync(path)
const lines = content.toString().split('\n').length-1
console.log(lines)

// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
