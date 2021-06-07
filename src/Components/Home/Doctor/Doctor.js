import React from "react";
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctors}) => {
  return (
    <div className="col-md-4 text-center">
      
{    doctors.image?  
 <img className="img-fluid mb-3" style={{ height: '200px' }} src={`data:image/jpeg;base64,${doctors.image.img}`} alt="" /> :

  <img className="img-fluid mb-3" style={{ height: '200px' }} src={`https://whispering-sands-28148.herokuapp.com/${doctors.img}`} alt="" />
  
  
  }      
     <h4>{ doctors.name}</h4>
     
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
        +880-188-934789
      </p>
      
    </div>
  );
};

export default Doctor;
