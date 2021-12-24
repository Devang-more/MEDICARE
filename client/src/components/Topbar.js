import { AddModerator } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./../style/Topbar.css";

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
            <div classname="hstack gap-6">
  <div classname="bg-light border"><Link to="/">Home</Link></div>
  <div classname="bg-light border"><Link to="/loginpage">Log in</Link></div>
  <div classname="bg-light border"><Link to="/Signup_P">Sign up</Link></div>
  <div classname="bg-light border"><Link to="/doctors">Doctors</Link></div>

</div>
      {/* <div className="topbar__right">
      <a href="/" class="link-danger">Home</a>
      <Link to="/">Home</Link>
      </div>
      <div className="topbar__right">
      <Link to="/loginpage">Log in</Link>
      </div>
      <div className="topbar__right">
      <Link to="/Signup_P">Sign up</Link>
      </div> */}
    </div>
    
  );
}

export default Topbar;
