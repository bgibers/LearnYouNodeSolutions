/*
 Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/

const http = require('http')
const url = process.argv[2]
const bufferList = require('bl')

http.get(url, (response) => {
  response.setEncoding('utf8')
  response.pipe(bufferList(function (err, data) {
    if (err) console.error(err)

    console.log(data.length)
    console.log(data.toString())
  }))
}).on('error', console.error)
