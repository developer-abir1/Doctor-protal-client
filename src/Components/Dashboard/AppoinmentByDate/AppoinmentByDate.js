import React from 'react';
import AppoinmentShortList from '../AppoinmentShortLest/AppoinmentShortList';

const AppoinmentByDate = ({ appointments }) => {
    console.log(appointments)
    return (
        <div>
            <h2 className="text-brand text-center">Appointments: {appointments.length}</h2>



           
{       appointments.length == 0? <h3 style={{color:'gray'}} className="text-center mt-5">Appoinment is not available</h3>:    <AppoinmentShortList appointments={appointments}></AppoinmentShortList>
}          
        </div>



    );
};

export default AppoinmentByDate;