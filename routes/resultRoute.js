const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
var request = require('request');

var urlencoded = bodyParser.urlencoded({extended:false});

router.get('/results',function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query +"&apikey=e58f3a8e"

    request(url,function(error, response, body){
        if(!error && response.statusCode >= 200){
           
            var data = JSON.parse(body);
            
            res.render("results",{data:data})
        }else{
            res.render("Sorry")
        }
    });

    
});

module.exports = router;