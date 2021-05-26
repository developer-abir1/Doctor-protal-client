import React, { useState } from "react";
import AppoinmentFrom from "../AppoinmentFrom/AppoinmentFrom";
import './BookingCard.css';



const BookingCard = ({ booking , date}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
    function closeModal(){
      setIsOpen(false);
    }
  return (
    <div className="col-md-4 my-3 bookingCard ">
      <div class="card  text-center">
        <div class="card-body">
          <h4 class="card-title text-brand">{booking.subject}</h4>
          <h6 class=" m-3">{booking.visitingHour}</h6>
          <p class="card-text text-secondary  text-uppercase">
          {booking.TotalSpase} Spases Available
          </p>
          <button onClick={openModal} className="btn-brand text-uppercase">Book Appointment</button>
          <AppoinmentFrom modalIsOpen={modalIsOpen} apponimentOn={booking.subject} apponimentTime={booking.visitingHour} apponimentSpaces={booking.TotalSpase} date={date} closeModal={closeModal}></AppoinmentFrom>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
