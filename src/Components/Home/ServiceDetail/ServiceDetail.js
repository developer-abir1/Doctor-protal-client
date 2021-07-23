import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-3 text-center  service-card" style={{ width: '18rem' }}>
            <img style={{ height: '50px' }} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServiceDetail;