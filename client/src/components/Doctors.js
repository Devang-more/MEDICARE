import React from "react";
import {DoctorsList} from "./DoctorsList";
import DoctorsItem from "./DoctorsItem";
import "./../style/Doctors.css";

function Doctors() {
  
  

  return (
    <div className="doctors">
      <h1 className="doctorsTitle">Our Doctors</h1>         {/* list of doctors*/}
      <div className="doctorsList">
        {DoctorsList.map((doctorsItem, key) => {
          return (
            <DoctorsItem
              key={key}
              image={doctorsItem.image}
              name={doctorsItem.name}
              speciality={doctorsItem.speciality}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Doctors;