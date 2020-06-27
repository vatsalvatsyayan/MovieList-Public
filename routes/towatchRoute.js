const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const toWatch = require("../models/towatch");
var request = require('request');

var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended:false});

router.get('/towatch',function(req,res){
    toWatch.find({}, function(err,towatch){
        if(err) throw err;
        
        
        res.render("towatch",{user:towatch});
    });
})

router.post('/towatch',urlencoded, function(req,res){
  
    request(req.body.movielink,function(error, response, body){
        if(!error && response.statusCode >= 200){
            var data = JSON.parse(body);

            console.log(data);

            var pending = {
                Title: data.Title,
                Year: data.Year,
                Runtime: data.Runtime,
                imdbRating: data.imdbRating,
                imdbID: data.imdbID
            }

            toWatch.find({imdbID: data.imdbID},function(err,check){
                if(check.length!=0){
                    res.render("exists");
                }else{
                    var addToWatch = toWatch(pending).save(function(err,completed){
                        if(err) throw err;
                        res.render("search");
        
                    })
                }
            })
   
        }
    })

});

module.exports = router;