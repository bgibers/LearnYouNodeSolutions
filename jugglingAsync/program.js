/*
  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments. DO NOT USE ASYNC LIBS
*/

const http = require('http')
const bufferList = require('bl')
var url = undefined
var contents = []
var count = 0

function getData (url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8')
    response.pipe(bufferList(function (err, data) {
      if (err) console.error(err)

      contents[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(contents[i])
  }
}

for (var i = 0; i < 3; i++) {
  url = process.argv[i + 2]
  getData(url, i)
}
