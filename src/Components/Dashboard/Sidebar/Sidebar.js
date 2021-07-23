import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';




const Sidebar = () => {

    const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);

    const [isDoctors, setDoctors] = useState(false);

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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            {isDoctors.length === 0 && <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                 <li >
                        <Link to="/doctor/appointment" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                        </Link>
                    </li>
                {isDoctors && <div >

                   
                    <li>
                        <Link to="/doctor/patients" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/prescriptions" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/addDoctor" style={{ textDecoration: 'none' }} className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" style={{ textDecoration: 'none' }} className="text-white" >
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