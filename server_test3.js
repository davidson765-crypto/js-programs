let http = require("http")
let url = require("url")


let server = new http.Server(function(req, res){
    let urlPasre = url.parse(req.url, true)
    for (let i=1;i<11;i++){
        
        
        
        setTimeout(() => {
            
            console.log(i)
            
        }, 1000*i
        ) 
            
        
    }
    
    res.end()
}) 


server.listen(1337,"127.0.0.1")