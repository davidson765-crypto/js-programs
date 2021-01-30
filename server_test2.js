let http = require("http")
let url = require("url")

let server = new http.Server(function(req, res){
    let urlParsed = url.parse(req.url, true)
    console.log(req.method, req.url)
    console.log(urlParsed.query.message)
    console.log(url.parse(req.url, true))
    res.end("your request: " + urlParsed.query.message)
})


server.listen(1237,"127.0.0.1")