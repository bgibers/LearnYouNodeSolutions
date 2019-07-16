/*
  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.
*/

const fs = require('fs')
let count = 0

try {
  const data = fs.readFileSync(process.argv[2]).toString().split('\n')

  count = data.length - 1

  console.log(count)
} catch (err) {
  console.error(err)
}

/*
Solution -
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/
