var mysql_connection = require("./connection.js");


function selectAll(table, cb){
    mysql_connection.query("select * from " + table, function(error, results){
        if(error) throw error;
        cb(results);
    });
}

function create(table,cols,vals,cb){
    var query = "INSERT INTO " + table;
    query += " (" + cols.toString() + ")" + " value (?,?)"
    console.log(query);
    mysql_connection.query(query, vals, function(error, results){
        if(error){            
            // console.log(error);
            return error;
        }
        // console.log(results);
        cb(results);
    })
}

function update(table,vals,condition,cb){
    mysql_connection.query("UPDATE " + table + " SET " + vals + " WHERE " + condition, function(error, results){
        if(error){
            return error;
        }
        cb(results);
    })
}

module.exports = {selectAll,create,update};

