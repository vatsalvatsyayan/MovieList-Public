// Get all the required packages
var express = require('express');
var mongoose = require('mongoose')
var app = express();
var request = require('request');

// Get all the routes 
var completedR = require('./routes/completedRoute');
var toWatchR = require("./routes/towatchRoute");
var resultR = require("./routes/resultRoute");
var infoR = require("./routes/infoRoute");
var searchR = require("./routes/searchRoute");

app.set("view engine", "ejs");
app.use('/assets',express.static('assets'));

//Connecting to MongoDB
mongoose.connect('mongodb+srv://test:test@cluster0-nfax2.mongodb.net/MovieDB?retryWrites=true&w=majority')

mongoose.set('useFindAndModify', false);

var movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Runtime: String,
    imdbRating: String,
    imdbID: String
}, {timestamps: true});

// Using all the Routes
app.use(searchR);
app.use(resultR);
app.use(infoR);
app.use(completedR);
app.use(toWatchR);

// Connecting to Server
app.listen(4000,function(){
    console.log("working");
})

