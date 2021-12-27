const mongoose = require('mongoose');

const appointmentschema = new mongoose.Schema({
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        required: true
    },
    time:{
        type : String,
        required: true
    },
    
    speciality:{
        type : String,
        required: true
    },
    mobileno:{
        type : String,
        required: true
    }
})
const appointmentform = mongoose.model('appointmentform' , appointmentschema);

module.exports = appointmentform;