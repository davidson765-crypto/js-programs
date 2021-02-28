const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'test','text.txt')

fs.writeFile(filePath, 'hello world', (err) => {
	if (err){
		throw err
	}
	console.log('file created')
})

fs.appendFile(filePath, '\nhello world again it is me', (err) => {
	if (err){
		throw err
	}
	console.log('file changed')
})

fs.readFile(filePath, 'utf-8', (err,info)=>{
	if (err){
		throw err
	}
	console.log(info)
})