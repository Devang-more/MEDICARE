import React from 'react'
import { Button } from "@mui/material";
import './Signup_P.css';
const Signup_P=()=>{
    return (
        <div className="SignupPage">
            <div className="SignupForm">
                <h2 className="heading"> Sign up Page for Patient  </h2>
        <form>
           <div className="formInput">
                <input  placeholder="First Name"></input>
            </div>
            <div className="formInput">
                <input  placeholder="Last Name"></input>
            </div>
            <div className="formInput">
                <input  placeholder="D O B"></input>
            </div>
            <div className="formInput">
                <input  placeholder="E-mail ID"></input>
            </div>
            <div className="formInput">
                <input  placeholder="Password"></input>
            </div>
            <div className="formInput">
                <input  placeholder="Location"></input>
            </div>
            <Button className="signinButton">Sign in</Button>
            
        </form>
        </div>
        </div>
    )
}
export default Signup_P;