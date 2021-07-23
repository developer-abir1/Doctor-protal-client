import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';


const Doctors = () => {

    const [doctor, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://whispering-sands-28148.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])

    return (
        <section className="">
            <div className="container">
                <h5 className="text-center  text-brand mb-5" >Our Doctors</h5>
                <div className="row" >
                    {

                        doctor.map(doctors => <Doctor doctors={doctors}></Doctor>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Doctors;