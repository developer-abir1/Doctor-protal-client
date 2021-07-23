import React, { useEffect, useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}


const Dashboard = () => {

    const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);
     
    const [appointments, setAppointments] = useState([]);
    const [patient , setPatient] = useState([]);
      const [isDoctors, setDoctors] = useState(false);
   

    useEffect(() => {
        fetch('https://whispering-sands-28148.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

     useEffect(() => {
        fetch('https://whispering-sands-28148.herokuapp.com/isDoctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedIndUser.email })
        })
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])





    return (
        <section>
           
 
            <div style={containerStyle} className=" row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">


                    <div className="www text-center">
                        <h1 className="text-start">Dashboard</h1>

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-2 " style={{ height: '100px', margin: "5px", backgroundColor: 'blue', borderRadius: '10px', color: "white", fontWeight: '700' }}>
                                <h1>{ appointments.length}</h1> 
                                
                             <h4>Appoinment</h4>   
                            </div>
                            <div className="col-md-2 " style={{ height: '100px', margin: "5px", backgroundColor: 'red', borderRadius: '10px', color: "white", fontWeight: '700' }}>
                             
                            <h1>{ appointments.length}</h1> 
                                
                                <h4>Appoinment</h4>  
                            </div>
                            <div className="col-md-2 " style={{ height: '100px', margin: "5px", backgroundColor: 'gold', borderRadius: '10px', color: "white", fontWeight: '700' }}>
                            <h1>{ appointments.length}</h1> 
                                
                                <h4>Appoinment</h4>  
                            </div>
                            <div className="col-md-2 " style={{ height: '100px', margin: "5px", backgroundColor: 'yellow', borderRadius: '10px', color: "black", fontWeight: '700' }}>
                            <h1>{ appointments.length}</h1> 
                                
                                <h4>Appoinment</h4>  
                            </div>
                            <div className="col-md-2 " style={{ height: '100px', margin: "5px", backgroundColor: 'blue', borderRadius: '10px', color: "white", fontWeight: '700' }}>
                             
                            <h1>{ appointments.length}</h1> 
                                
                                <h4>Appoinment</h4>  
                            </div>


                        </div>
                    </div>
                    <div className=" mt-5">
                    <h3 className="text-secondary">Recent Appoinment</h3>

                    </div>
                    <table className="table table-borderless ">
                     
                        <thead>

                            <tr>

                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Schedule</th>
                                <th className="text-secondary" scope="col">Time</th>
                                <th className="text-secondary" scope="col">Date</th>
                                <th className="text-secondary" scope="col">Contact</th>
                                <th className="text-secondary" scope="col">Prescription</th>
                                <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                            {appointments.length === 0 && <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>}
                       {isDoctors &&<tbody>
                            {
                              appointments.map((appointments, index) =>
                                       
                                    <tr>
                                   
                                        <td>{index + 1}</td>
                                        <td>{appointments.name}</td>

                                        <td>{appointments.phone}</td>
                                        <td>{appointments.phone}</td>
                                        <td>{appointments.phone}</td>
                                        <td>
                                            <select  class="btn-brand" aria-label="Default select example">
                                                <option selected>Appointments</option>
                                                <option >Visited</option>
                                                <option >Visited</option>
                                                <option >Visited</option>

                                            </select>
                                        </td>
                                        <td>
                                        <select class="btn-brand" aria-label="Default select example">
                                                <option selected style={{background:'red'}} >Not Visited</option>
                                                <option style={{background:'green'}} >Visited</option>

                                            </select>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>}
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;