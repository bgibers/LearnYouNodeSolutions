/*
  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.
*/

var fs = require('fs')

fs.readFile(process.argv[2], function lineCount (err, data) {
  if (err) return console.error(err)
  const lines = data.toString().split('\n').length - 1
  console.log(lines)
})

/*
OFFICIAL SOL
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/
