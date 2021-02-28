
const chalk = require("chalk")
const text = require('./data')
const fs = require('fs')
const path = require('path')
const http = require('http')

let date = new Date()


console.log(chalk.blue("Hello NodeJs"))
console.log(chalk.red(text))
console.log(__dirname)
console.log(__filename)


let server = http.Server((req,res)=>{
	let filePath = path.join(__dirname,'public', req.url==='/' ? 'index.html' : req.url)
	const ext = path.extname(filePath)

	if (!ext){
		filePath += '.html'
	}

	fs.readFile(filePath,(err,info)=>{
		if(err){
			fs.readFile(path.join(__dirname,'public','error.html'),(err,info)=>{
				if (err){
					res.writeHead(500, {
						'Content-Type': 'text/html'
					})
					res.end('Error')
					console.log("page doesn't exist")
				}
				else {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					})
					res.end(info)
					
				}
			})
		}
		else {
			res.writeHead(200, {
						'Content-Type': 'text/html'
					})
			res.end(info)
			console.log("opened:", req.url==="/" ? "/main" : req.url, date, req.method)
			//console.log(date, req.method)
			
		}
	})
})

const PORT = process.env.PORT || 8000

server.listen(PORT,()=>{
	console.log('server has been started on port', PORT)
})