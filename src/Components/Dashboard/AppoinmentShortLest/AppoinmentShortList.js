import React from 'react';

const AppoinmentShortList = ({ appointments }) => {

    const handleManuChange = (e) => {
     
       
    }



    console.log(appointments)
    return (
        <table className="table table-borderless ">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Schedule</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointments, index) =>

                        <tr>
                            <td>{appointments.name}</td>
                            <td>{appointments.phone}</td>
                            <td>
                                <select class="btn-brand" onChange={handleManuChange}  aria-label="Default select example">
                                    <option selected>Not Visited</option>
                                    <option >Visited</option>
                                   
                                </select>
                            </td>
                        </tr>
                            )
                }
            </tbody>
        </table>
            );
};

            export default AppoinmentShortList;