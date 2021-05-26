import React, { useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Nevbar from '../../Share/Nevbar/Nevbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    document.title ="Appointment"

    const [selectedDate, setSelectedDate ] = useState(new Date())
  
    const handleDateChange =  date => {
        setSelectedDate(date)
    }



    return (
        <div>
            <Nevbar></Nevbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;