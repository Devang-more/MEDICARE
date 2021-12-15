import React from 'react'
import "./appointmentform.css"
function Form(){
    return(
        <section>
            <div>
                <div id='formheading'>
                    <h2>APPOINTMENT FORM</h2>
                    <div className='formdata'>
                        <form className='appointmentform'>
                            <div className='forminput' id='username'>
                                <label htmlFor='Username or ID'>
                                <i class="zmdi zmdi-account material-icons-username"></i>
                                </label>
                                <input type="text" name="Username or ID" autocomplete="off" placeholder="Username or ID"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Password'>
                                <i class="zmdi zmdi-lock material-icons-username"></i>
                                </label>
                                <input type="text" name="Password" autocomplete="off" placeholder="Password"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Date for appointment'>
                                <i class="zmdi zmdi-calendar material-icons-username"></i>
                                </label>
                                <input type="date" name="Date" autocomplete="off" placeholder="Date"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Time slot'>
                                <i class="zmdi zmdi-time material-icons-username"></i>
                                </label>
                                <input type="time" name="Time slot" autocomplete="off" placeholder="Time slot"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='spec'>
                                <i class="zmdi zmdi-slideshow material-icons-username"></i>
                                </label>
                                <input type="text" name="Speciality" autocomplete="off" placeholder="Speciality"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Mobile no.'>
                                <i class="zmdi zmdi-phone-in-talk material-icons-username"></i>
                                </label>
                                <input type="number" name="Mobile no." autocomplete="off" placeholder="Mobile no."></input>  
                            </div>
                            <div className='confirm'>
                                <input type="submit" value="Confirm"/>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Form;