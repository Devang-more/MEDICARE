import { AddModerator } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
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
      {/* <div className="topbar__right">
        <Button className="topbar__rightLogin">Log in</Button>
        <Button className="topbar__rightSignup">Sign up</Button>
      </div> */}
    </div>
  );
}

export default Topbar;
