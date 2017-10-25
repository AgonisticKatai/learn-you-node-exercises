const http = require('http')
const url = require('url')

parseTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

unixTime = (time) => {
  return {
    unixtime: time.getTime()
  }
}

parseQuery = (url) => {
  if (url.pathname === '/api/parsetime') {
    return parseTime(new Date(url.query.iso))
  } else {
    return unixTime(new Date(url.query.iso))
  }
}

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true)
  console.log(url)
  res.end(JSON.stringify(parseQuery(urlParse)))
})
server.listen(process.argv[2])
