/*
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/

const http = require('http')
const map = require('through2-map')

var server = http.createServer(function callback (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(process.argv[2])
