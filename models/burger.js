var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols,vals,cb){
        console.log("cols=",cols);
        console.log("vals=",vals);
        orm.create("burgers",cols,vals,function(res){
            cb(res);
        });
    },  
    update: function(vals,condition,cb){
        return orm.update("burgers", vals,condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;


