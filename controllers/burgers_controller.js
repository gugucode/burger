var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Get all burgers (devoured or not devoured) from database and send them to client
router.get("/",function(req,res){
    burger.selectAll(function(data){
        res.render("index",{burgers: data});
    });
});

// Save a burger into database
router.post("/api/burgers",function(req,res){
    burger.insertOne(['burger_name','devoured'],
                  [req.body.burger_name, req.body.devoured],
                  function(result){
                    if(result.affectedRows == 0){
                        res.status(404).end();
                    }else{
                        res.status(200).end();
                    }
                  }
    )
});

// update a burger's devoured column to true
router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;
    var vals = "devoured = " + req.body.devoured
    burger.updateOne(vals,condition,function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
});

module.exports = router;