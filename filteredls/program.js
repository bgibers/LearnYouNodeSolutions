/*
Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to
  filter the list to only files that end with .txt. Note that the second
  argument will not come prefixed with a '.'
*/

const fs = require('fs')
const path = require('path')
const ext = '.' + process.argv[3]

fs.readdir(process.argv[2], function callback (err, files) {
  if (err) return console.error(err)
  list.forEach(function (item) {
    if (path.extname(item) === ext) {
      console.log(item)
    }
  })
})

/* OFFICAL solution
    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/
