var mysql = require("mysql");
var mysql_connect = mysql.createConnection({
	host: "localhost",
    	port: 3306,
    	user: "root",
    	password: "password",
    	database: "burgers_db"
});

mysql_connect.connect(function(error){
	if(error){
		console.log(error);
		return;
	}
	console.log("Connected as id " + mysql_connect.threadId);
});

module.exports = mysql_connect;