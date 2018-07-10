var mysql_connection = require("./connection.js");


function selectAll(table, cb){
    mysql_connection.query("select * from " + table, function(error, results){
        if(error) throw error;
        cb(result);
    });
}

function create(table,cols,vals,cb){

    mysql_connection.query("INSERT INTO " + table + " " + cols + " value " + vals, function(error, results){
        if(error){
            return error;
        };
        // console.log(results);
        cb(result);
    })
}

function update(table,vals,condition,cb){
    mysql_connection.query("UPDATE " + table + " SET " + vals + " WHERE " + condition, function(error, results){
        if(error){
            return error;
        }
        cb(result);
    })
}

module.exports = {selectAll,create,update};

