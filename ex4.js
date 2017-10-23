const fs = require('fs');

function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([
  stats('ex1.js'),
  stats('ex2.js'),
  stats('ex3.js')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
