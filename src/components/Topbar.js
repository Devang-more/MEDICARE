import { AddModerator } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  return (
   
        
    <div className="topbar">
            <div className="topbar__left">
              <AddModerator className="logo" />
              <h1>
                <span className="Medi">Medi</span>
                <span className="Care">Care</span>
              </h1>
            </div>
      <div className="topbar__right">
      <Link to="/">Home</Link>
      </div>
      <div className="topbar__right">
      <Link to="/loginpage">Log in</Link>
      </div>
      <div className="topbar__right">
      <Link to="/Signup_P">Sign up</Link>
      </div>
    </div>
    
  );
}

export default Topbar;
