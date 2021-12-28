import React from "react";

function DoctorsItem({ image, name, speciality }) {
  return (
    <div className="doctorsItem">                       {/*content of doctors profile*/}
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {speciality} </p>
    </div>
  );
}

export default DoctorsItem;
