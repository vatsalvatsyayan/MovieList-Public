const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Runtime: String,
    imdbRating: String,
    imdbID: String
}, {timestamps: true});


var toWatch  = mongoose.model('toWatch',movieSchema);

module.exports = toWatch;