const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
var request = require('request');

var urlencoded = bodyParser.urlencoded({extended:false});

router.post('/info',urlencoded, function(req,res){
    

    request(req.body.movielink,function(error, response, body){
        if(!error && response.statusCode >= 200){
            var data = JSON.parse(body);
             res.render("info",{data:data });
        }
    })

});

module.exports = router;