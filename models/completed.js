const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Runtime: String,
    imdbRating: String,
    imdbID: String
}, {timestamps: true});

var completed = mongoose.model('completed',movieSchema);


module.exports = completed;