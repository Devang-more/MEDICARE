import React from 'react'
import { Button } from "@mui/material";
import './Signup_D.css';
function Signup_D() {
    return (
        <div className="SignupPage">
            <div className="SignupForm">
                <h2 className="heading"> Sign up Page for Doctor  </h2>
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
                <input  placeholder="Speciality"></input>
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
            <Button className="signinButton">Sign up</Button>
            <p className="formPara">
            Sign up for Patient? <a href="/Signup_P">Click here</a>
          </p>
            <p className="formPara">
            Already a member? <a href="/loginpage">Sign in</a>
          </p>
            
        </form>
        </div>
        </div>
    )
}
export default Signup_D;