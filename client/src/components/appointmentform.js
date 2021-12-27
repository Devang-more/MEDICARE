import React from 'react'
import {useHistory} from "react-router-dom";
import { useState } from "react";
import "./../style/appointmentform.css"
function Form(){
    
    const history = useHistory();
    const[user, setUser] = useState({
        email:"",password:"",date:"",time:"",speciality:"",mobileno:""
    });
    let name, value;

    const handleinputs= (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) =>{
        e.preventDefault();

        const {email, password, date, time, speciality, mobileno } = user;
    
        const res = await fetch("/appointmentform", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, date, time, speciality, mobileno
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("invalid form data");
            console.log("invalid form data");
        } else{
            window.alert(" successfully recieved an appointment form");
            console.log(" successfully recieved an appointment form");
        }
        history.push("/home")
    }
    
    return(
        <section>
            <div>
                <div id='formheading'>
                    <h2>APPOINTMENT FORM</h2>
                    <div className='formdata'>
                        <form className='appointmentform'>
                            <div className='forminput' id='username'>
                                <label htmlFor='email'>
                                <i class="zmdi zmdi-account material-icons-email"></i>
                                </label>
                                <input type="text"  value={user.email}  onChange={handleinputs} name="email" autocomplete="off" placeholder="email"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Password'>
                                <i class="zmdi zmdi-lock material-icons-username"></i>
                                </label>
                                <input type="text" name="password" value={user.password}  onChange={handleinputs} autocomplete="off" placeholder="Password"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Date for appointment'>
                                <i class="zmdi zmdi-calendar material-icons-username"></i>
                                </label>
                                <input type="date" name="date" value={user.date}  onChange={handleinputs}autocomplete="off" placeholder="Date"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Time slot'>
                                <i class="zmdi zmdi-time material-icons-username"></i>
                                </label>
                                <input type="time" name="time"value={user.time}  onChange={handleinputs} autocomplete="off" placeholder="Time slot"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='spec'>
                                <i class="zmdi zmdi-slideshow material-icons-username"></i>
                                </label>
                                <input type="text" name="speciality"value={user.speciality}  onChange={handleinputs} autocomplete="off" placeholder="Speciality"></input>  
                            </div>
                            <div className='forminput'>
                                <label htmlFor='Mobile no.'>
                                <i class="zmdi zmdi-phone-in-talk material-icons-username"></i>
                                </label>
                                <input type="number" name="mobileno"value={user.mobileno}  onChange={handleinputs} autocomplete="off" placeholder="Mobile no."></input>  
                            </div>
                            <div className='confirm'>
                                <input type="submit" onClick={PostData} value="Confirm"/>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Form;