import React from 'react';
import { Link } from "react-router-dom";
import "./../style/doctorselection.css";

function Selection(){
    
    return(
        <div className='selection'>
            <div >
                <form className='doctorselection'>
                                <div className='doctorselectioninput' id='location' >    
                                    <i class="zmdi zmdi-pin material-icons-username"></i>        {/* selection of location and speciality for the appointment form*/}
                                    <input type="text" name="Location" autocomplete="off" placeholder="Location"></input>  
                                </div>
                                <div className='doctorselectioninput' id='speciality'>
                                    <i class="zmdi zmdi-slideshow material-icons-username"></i>
                                    <input type="text" name="Speciality" autocomplete="off" placeholder="Speciality"></input>  
                                </div>
                                <div className='confirm'>
                                <Link to="/appointmentform">
                                <input type="submit" value="Confirm"/>
                                </Link>
                                </div> 
                </form>
            </div>
        </div>
    )
}
export default Selection;