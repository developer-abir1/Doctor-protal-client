import React from 'react';

const AppoinmentShortList = ({ appointments }) => {
    console.log(appointments)
    return (
        <table className="table table-borderless table-hover">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              appointments.map((appointments, index) => 
                    
                <tr>
                    <td>{appointments.name}</td>
                    <td>{appointments.phone}</td>
                    <td>{appointments.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default AppoinmentShortList;