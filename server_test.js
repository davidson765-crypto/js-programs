let http = require("http")






let server = new http.Server(function(req, res){
    for (let i=1;i<11;++i){
        
        res.write(" passed moment: " + i)
        
        
    }
    res.end()

})

server.listen(1337, '127.0.0.1')