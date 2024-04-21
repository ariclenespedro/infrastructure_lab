const mongoose = require('mongoose');

const schoolShema = mongoose.Schema({
    designation: {type:String, required:true},
    email: {type:String, required:true},
    location: String,
    total_infrastructure: Number,
},{timestamps: true});

const School = mongoose.model('School', schoolShema);

module.exports = School;
