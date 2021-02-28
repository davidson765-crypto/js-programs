const http = require('http')
const url = require('url')
const {parse} = require('querystring')


let server = http.Server((request, res)=>{
    let body = ''
    request.on('data', chunk => {
        body += chunk
    })
    request.on('end', ()=>{
        console.log(body, request.method)
        let params = parse(body)
        
        console.log(params)
        //res.end()
    })
    res.end()
    
})

let PORT = process.env.PORT || 8000

server.listen(PORT, console.log("server started on port", PORT))