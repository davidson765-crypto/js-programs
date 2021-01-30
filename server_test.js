let http = require("http")
//let server = new http.Server()





let server = new http.Server(function(req, res){
    for (let i=1;i<11;++i){
        
        setTimeout(()=>{
            res.write(" passed: " + i)
        }, 1000*i)
        
    }
    res.end()
    //res.end("Привет, мир!" + "запросов: " + (++counter))
})

server.listen(1337, '127.0.0.1')