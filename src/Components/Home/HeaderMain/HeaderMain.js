import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 ">
            <h1 className="text-font m-3">Your New Smile <br /> starts here</h1>
            <p className="text-secondary m-3">Lorem ipsum dolor sit  Delectus nesciunt sunt rerum sequi perspiciatis officia totam, laudantium harum itaque, voluptates tenetur. Enim maiores quidem in.</p>
             
             <button className="btn-brand text-uppercase m-3">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;