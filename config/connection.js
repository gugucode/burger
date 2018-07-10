var mysql = require("mysql");
var mysql_connect = mysql.createConnection({
	host: "localhost",
    	port: 3306,
    	user: "root",
    	password: "password",
    	database: "burgers_db"
});

module.exports = mysql_connect.connect();