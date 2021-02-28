const mysql = require('mysql')


const mysqlConfig = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'hr'
}

connectToDB = function(){
	connection = mysql.createConnection(mysqlConfig)
	conneection.connect((err)=>{

	})
}