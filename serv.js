let http = require("http")
let url = require("url")
let log = require("winston")

let server = new http.Server(function(req, res){
    let urlPasre = url.parse(req.url, true)
    for (let i=1;i<11;i++){
        
        
        
        setTimeout(() => {
            
            if (i%2==0){
                log.info("everything is fine")
            }
            else if(i%2==1){
                log.error("this is not good")
            }
            
        }, 1000*i
        ) 
            
        
    }
    
    res.end()
}) 


server.listen(1337,"127.0.0.1")