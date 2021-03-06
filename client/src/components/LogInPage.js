import { Button } from "@mui/material";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import React from "react";
import "./../style/LogInPage.css";



function LogInPage() {
  
  const history=useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
                                          {/* connecting backened and database with frontend*/}
  const loginUser=async(e)=>{
    e.preventDefault();
    const res=await fetch('/loginpage', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },body:JSON.stringify({
        email,
        password
      })
    });
    const data=res.json();
    if(res.status===400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("login Successfully")
      history.push("/");
    }
  }  
  
  
  
  
  return (
    <div className="logInPage">
      <div className="logInPageForm">
        <h2 className="loginPage__heading">Welcome to MediCare</h2>   {/*login page form with email and password as input*/}
        <form method="POST">
          <div className="formInput">
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="formInput">
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          </div>
          <Button className="siginButton" onClick={loginUser} >Sign in</Button>
          <p className="formPara">
            Not a member? <a href="/Signup_P">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
