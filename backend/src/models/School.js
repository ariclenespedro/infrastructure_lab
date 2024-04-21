const mongoose = require('mongoose');

const schoolShema = mongoose.Schema({
    designation: String,
    email: String,
    location: String,
    total_infrastructure: Number,
},{timestamps: true});

const School = mongoose.model('School', schoolShema);

module.exports = School;
