var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/",function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers",function(req,res){
    console.log("req.body.burger_name",req.body.burger_name)
    burger.create(['burger_name','devoured'],
                  [req.body.burger_name, req.body.devoured],
                  function(result){
                    if(result.affectedRows == 0){
                        return res.status(404).end();
                    }else{
                        res.status(200).end();
                    }
                  }
    )
});

router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;
    var vals = "devoured = " + req.body.devoured
    console.log("condition",condition);
    burger.update(vals,condition,function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
});

module.exports = router;