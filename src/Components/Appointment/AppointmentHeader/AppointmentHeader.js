import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 ">
                <h2 className="text-brand mb-5 ">Appointment</h2>
            <Calendar className="Calendar"
              onChange={handleDateChange}
                value={new Date()}
             />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;