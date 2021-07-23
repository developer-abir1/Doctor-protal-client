import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';

const DashboardAppoinments = () => {

    const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);


    }


    useEffect(() => {

        fetch('https://whispering-sands-28148.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedIndUser.email })
        })
            .then(res => res.json())
            .then(appointments => setAppointments(appointments)
            )
    }, [selectedDate])



    return (
        <div>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4 className="text-brand">Appointment </h4>
                {loggedIndUser.length > 0 && <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="mt-5 ">


                            <Calendar className="Calendar"
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <AppoinmentByDate appointments={appointments}></AppoinmentByDate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAppoinments;