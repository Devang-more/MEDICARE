import { AddModerator } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./../style/Topbar.css";

function Topbar() {
  return (
   
        
    <div className="topbar">
            <div className="topbar__left">
              <AddModerator className="logo" />       {/*topbar of every page*/}
              <h1>
                <span className="Medi">Medi</span>
                <span className="Care">Care</span>
              </h1>
            </div>
            <div classname="hstack gap-6">
  <div classname="bg-light border"><Link to="/">Home</Link></div>
  <div classname="bg-light border"><Link to="/loginpage">Log in</Link></div>
  <div classname="bg-light border"><Link to="/Signup_P">Sign up</Link></div>
  <div classname="bg-light border"><Link to="/doctors">Doctors</Link></div>

</div>
</div>
    
  );
}

export default Topbar;
