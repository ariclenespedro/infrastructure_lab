const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
},{timestamps: true});

const User = mongoose.model('User', userShema);

module.exports = User;
