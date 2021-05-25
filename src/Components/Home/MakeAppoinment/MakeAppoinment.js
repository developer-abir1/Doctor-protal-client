import React from "react";
import doctor from "../../../images/doctor.png"
import './MakeAppoinment.css'

const MakeAppoinment = () => {
  return (
    <section className="make-appointment container">
      <div className="row d-flex ">
        <div className="col-md-5 col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
        </div>
        <div className="col-md-7 p-3 ">
            <h4 className="text-brand text-uppercase mt-3 pt-3 m-3">appointment</h4>
            <h1 className="text-white mb-3 m-3">Make an Appointment <br /> Today</h1>
            <p className="text-white m-3">It is a long establised fact that a reader will be distractedby the readable content of a page when looking at its</p>
            <button className="btn-brand m-3">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
