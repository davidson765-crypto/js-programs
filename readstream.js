let fs = require("fs")

let stream = new fs.ReadStream("index.html")

stream.setEncoding('utf-8')

stream.on('readable', function(){
    let data = stream.read()
    
    console.log(data)
})

stream.on('end', function(){
    console.log("end")
})