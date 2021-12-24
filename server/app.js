const dotenv =require('dotenv');
const mongoose = require('mongoose');
const express= require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'))

const PORT = process.env.PORT;

// app.get('/', (req,res) => {
//     res.send("helllo world")
// });
app.get('/Signup_D', (req,res) => {
    res.send("helllo world")
});
app.get('/Signup_P', (req,res) => {
    res.send("helllo world")
});
app.get('/loginpage', (req,res) => {
    res.send("helllo world")
});

app.listen(PORT ,()=>{
    console.log(`server is running on ${PORT}`)
})