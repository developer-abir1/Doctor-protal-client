import React, { useEffect, useState } from 'react';
import ApponimentDataTable from '../Dashboard/AppoinmentDataTable/ApponimentDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllPatient = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch('https://whispering-sands-28148.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="">
           
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }} >
             
            { appointments.length === 0 && <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
                <h4>All Patients</h4>
                <ApponimentDataTable appointments={appointments}></ApponimentDataTable>
            </div>
        </div>
    );
};

export default AllPatient;