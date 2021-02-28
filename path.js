const path = require('path')

console.log('name of file: ' + path.basename(__filename))

console.log('name of directory: ' + path.dirname(__filename))

console.log('extention of file: ' + path.extname(__filename))

console.log('parse: ' ,path.parse(__filename))

console.log(path.join(__dirname,'server','index.html'))