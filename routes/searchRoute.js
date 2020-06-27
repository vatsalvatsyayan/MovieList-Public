const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
var request = require('request');

var urlencoded = bodyParser.urlencoded({extended:false});

router.get("/",function(req, res){
    res.render("search")
});

module.exports = router;