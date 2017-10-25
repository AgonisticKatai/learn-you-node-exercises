const net = require('net')
const moment = require('moment')
const portNumber = process.argv[2] || 8000

const server = net.createServer((socket) => {
  socket.write(moment().format('YYYY-MM-DD hh:mm'))
  socket.end('\n')
}).on('error', (err) => {
  throw err
})

server.listen(portNumber)
