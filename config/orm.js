var mysql_connection = require("./connection.js");


function selectAll(table, cb){
    mysql_connection.query("select * from " + table, function(error, results){
        if(error) throw error;
        cb(results);
    });
}

function insertOne(table,cols,vals,cb){
    var query = "INSERT INTO " + table;
    query += " (" + cols.toString() + ")" + " value (?,?)"
    mysql_connection.query(query, vals, function(error, results){
        if(error) throw error;
        cb(results);
    })
}

function updateOne(table,vals,condition,cb){
    var query = "UPDATE " + table + " SET " + vals + " WHERE " + condition;
    mysql_connection.query(query, function(error, results){
        if(error) throw error;        
        cb(results);
    })
}

module.exports = {selectAll,insertOne,updateOne};

