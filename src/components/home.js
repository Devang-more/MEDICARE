import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./../style/Home.css";

function Home() {
  return (
    <div className="homePage">
      <div className="homePageForm">
        <h2 className="homePage__heading">Welcome to MediCare</h2>
        <form>
          <div className="homeformInput">
            <input type="Location" id="location" placeholder="Enter Location" />
          {/* </div>
          <div className="formInput"> */}
            <input type="text" id="text" placeholder="Enter doctor or speciality" />
          
          <Button className="searchButton">Search</Button>
          </div>
        </form>
      </div>
      <div className="options1">
            <div className="doctors">
                <Link to="/">
                <h2 className="h2heading">Doctors Near By</h2>
                <h4>Find the best doctors near your location</h4>
                </Link>
            </div>
            <div className="appointment">
                <Link to="/">
                <h2 className="h2heading">Book Appointments</h2>
                <h4>Book an appointment for the doctors according to availability(online/offline)</h4>  
                </Link>
            </div>
      </div>
      <div className="options2">
            <div className="video">
                <Link to="/">
                <h2 className="h2heading">Video/Audio Consult</h2>
                <h4>Direct consult the doctor online through Audio/Video comms</h4>
                    </Link>
            </div>
            <div className="speciality">
                    <Link to="/">
                <h2 className="h2heading">Specialities</h2>
                <h4>Search the doctors according to their speciality</h4>
            </Link>
            </div>
      </div>
      <div className="options3">
        <div className="reports">
                <Link to="/">
            <h2 className="h2heading">Reports</h2>
            <h4>History of reports of pateint</h4>
        </Link>
        </div>
        <div className="Pappointments">
                <Link to="/">
            <h2 className="h2heading">Past Appointments</h2>
            <h4>You can check your previous appointments and Doctors here</h4>
        </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Home;