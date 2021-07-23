import React from 'react';
import AppoinmentShortList from '../AppoinmentShortLest/AppoinmentShortList';
import './appointmentsDete.css'

const AppoinmentByDate = ({ appointments }) => {
    console.log(appointments)
    return (
        <div className="appointmentsDete">
            <h2 className="text-brand ">Appointments</h2>
            <p></p>



           
{       appointments.length === 0? <h3 style={{color:'gray'}} className="text-center mt-5">Appoinment is not available</h3>:    <AppoinmentShortList appointments={appointments}></AppoinmentShortList>
}          
        </div>



    );
};

export default AppoinmentByDate;