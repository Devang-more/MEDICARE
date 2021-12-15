import { Button } from "@mui/material";
import React from "react";
import "./../style/LogInPage.css";

function LogInPage() {
  return (
    <div className="logInPage">
      <div className="logInPageForm">
        <h2 className="loginPage__heading">Welcome to MediCare</h2>
        <form>
          <div className="formInput">
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="formInput">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <Button className="siginButton">Sign in</Button>
          <p className="formPara">
            Not a member? <a href="/Signup_P">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
