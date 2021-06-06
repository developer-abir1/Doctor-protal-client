import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height:'100%'
}


const Dashboard = () => {


    const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

     
    }


    useEffect(() => {

        fetch('http://localhost:4500/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date: selectedDate, email: loggedIndUser.email})
        })
            .then(res => res.json())
            .then(appointments => setAppointments(appointments))
    }, [selectedDate])







    return (
        <section>
            <div style={containerStyle} className=" row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppoinmentByDate appointments={appointments}></AppoinmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;