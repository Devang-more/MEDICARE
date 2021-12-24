const mongoose = require('mongoose');

const patientschema = new mongoose.Schema({
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
    
    password:{
        type : String,
        required: true
    },
    location:{
        type : String,
        required: true
    }
})
const Patient = mongoose.model('Patient' , patientschema);

module.exports = Patient;