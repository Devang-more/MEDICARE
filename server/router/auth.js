const express= require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema")

router.get('/', (req,res) => {
    res.send("helllo world from router")
});

router.post('/Signup_D', async (req,res) => {



    try{
        const {fname, lname, dob, email, speciality, password, location } = req.body;

        if(!fname || !lname || !dob || !email || !speciality || !password || !location){
        return res.status(422).json({error: "pls fill form properly"});
    }
        const userExist = await User.findOne({email: email });

        if(userExist){
            return res.status(422).json({error: "email already exist"});
        }else{
        const user = new User({fname, lname, dob, email, speciality, password, location})

        await user.save();

        res.status(201).json({message : "user registered successfully"})
        }

        }catch(err) {
            console.log(err);
        }
});

//login route

router.post('/loginpage', async (req,res) => {
    try{
        const {email, password } = req.body;

        if(!email || !password ){
            return res.status(400).json({error: "pls fill data properly"});
        }
        
        const userLogin = await User.findOne({email: email })

        console.log(userLogin);

        if(!userLogin){
            res.status(400).json({error: "user err"})
        }else{
            res.json({message: "user login success"})
        }

        }catch(err) {
            console.log(err);
        }
});

module.exports = router;