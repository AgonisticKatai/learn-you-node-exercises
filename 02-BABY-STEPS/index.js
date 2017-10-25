var sum = process.argv.slice(2).reduce((acc, number) => {
  acc += (+number)
  return acc
}, 0)

console.log(sum)

// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
