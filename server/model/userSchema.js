const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
                                    {/*user schema input*/}
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
    },
    tokens :[
        {
            token:{
                type : String,
                required: true
            }
        }
    ]
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

//generating token

userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);

        this.tokens= this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}

const User = mongoose.model('USER' , userSchema);

module.exports = User;