import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';




const Sidebar = () => {

    const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);

    const [isDoctors, setDoctors] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4500/isDoctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedIndUser.email })
        })
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
               {isDoctors && <div>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
               </div>}
            </ul>
            <div >
                <Link to="/" style={{ textDecoration: 'none' }} className="text-white "><FontAwesomeIcon icon={faSignOutAlt} /> <span className="logOut">Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;