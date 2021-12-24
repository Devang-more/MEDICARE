const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:{
        type : String,
        required: true
    },
    lname:{
        type : String,
        required: true
    },
    dob:{
        type : Date,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    speciality:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    location:{
        type : String,
        required: true
    }
})
const User = mongoose.model('USER' , userSchema);

module.exports = User;