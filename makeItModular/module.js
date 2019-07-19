const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err)
    }

    files = files.filter(function (item) {
      return path.extname(item) === '.' + ext
    })

    callback(null, files)
  })
}
