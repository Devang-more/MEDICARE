import React from 'react'
import {useHistory} from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import './../style/Signup_P.css';
function Signup_P() {
    
    const history = useHistory();
    const[user, setUser] = useState({
        fname:"",lname:"",dob:"",email:"",password:"",location:""
    });
    let name, value;

    const handleinputs= (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) =>{
        e.preventDefault();

        const {fname, lname, dob, email, password, location } = user;
    
        const res = await fetch("/Signup_P", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                fname, lname, dob, email, password, location
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("invalid registration");
            console.log("invalid registration");
        } else{
            window.alert("registration successfull");
            console.log("registration successfull");
        }
        history.push("/loginpage")
    }
    
    return (
        <div className="SignupPage">
            <div className="SignupForm">
                <h2 className="heading"> Sign up Page for Patient  </h2>
        <form method='POST'>
           <div className="formInput">
                <input type='text' name='fname' value={user.fname}  onChange={handleinputs} placeholder="First Name"></input>
            </div>
            <div className="formInput">
                <input type='text' name='lname' value={user.lname}  onChange={handleinputs} placeholder="Last Name"></input>
            </div>
            <div className="formInput">
                <input type='date' name='dob' value={user.dob}  onChange={handleinputs} placeholder="D O B"></input>
            </div>
            <div className="formInput">
                <input type='email' name='email' value={user.email}  onChange={handleinputs} placeholder="E-mail ID"></input>
            </div>
            <div className="formInput">
                <input type='password' name='password' value={user.password}  onChange={handleinputs} placeholder="Password"></input>
            </div>
            <div className="formInput">
                <input type='text' name='location' value={user.location}  onChange={handleinputs} placeholder="Location"></input>
            </div>
            <Button className="signinButton" onclick={PostData}>Sign up</Button>
            <p className="formPara">
            Sign up for Doctor? <a href="/Signup_D">Click here</a>
          </p>
            <p className="formPara">
            Already a member? <a href="/loginpage">Sign in</a>
          </p>
            
        </form>
        </div>
        </div>
    )
}
export default Signup_P;