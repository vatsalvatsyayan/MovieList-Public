const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const completed = require("../models/completed");
var request = require('request');
var urlencoded = bodyParser.urlencoded({extended:false});


router.get('/completed',function(req,res){
    completed.find({}, function(err,completed){
        if(err) throw err;
        res.render("completed",{user:completed});
    });
    
});

router.post('/completed',urlencoded, function(req,res){
    
    request(req.body.movielink,function(error, response, body){
        if(!error && response.statusCode >= 200){
            var data = JSON.parse(body);

            console.log(data);
            
            var complete = {
                Title: data.Title,
                Year: data.Year,
                Runtime: data.Runtime,
                imdbRating: data.imdbRating,
                imdbID: data.imdbID
            }

             completed.find({imdbID:data.imdbID},function(err, check){
                if(check.length != 0){
                    
                    res.render("exists");
                }else{
                    var addToCompleted = completed(complete).save(function(err,completed){
                        if(err) throw err;
                        res.render("search");
        
                    })
                }
            })    
        }
    })

});


module.exports = router;