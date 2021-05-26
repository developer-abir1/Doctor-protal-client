
import React from "react";
import './login.css';
import loginBg from "../../../images/login.png";
import facebook from "../../../images/facebook.png";
import google from "../../../images/google.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";



const Login = () => {
  return (
    <div className="loginFrom container">
      <div className="row">
        <div className="col-md-6 mt-5 pt-5">
          <form>
            <h3 className="text-center text-brand">Login</h3>

            <div className="form-group">
             
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
            
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
             
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <br />
            <button type="submit" className="btn-brand w-100">
              Sign Up
            </button>
            <p className="forgot-password text-right text-center mt-3">
              Already registered <a href="#" className="ms-auto">sign in?</a>
            </p>
          </form>
          
          <div className="form-group mt-3">
          <p className="loginWith">OR</p>
          <button className="login-provider ">Login with Google   <img src={google} alt="" width="30px"  srcset="" /> </button>
          <br /> 
          <button className="login-provider">Login with Facebook    <FontAwesomeIcon icon={faFacebook} />  </button>

          </div>
        </div>
        <div className="col-md-6 mt-3 pt-5">

            <img src={loginBg} className="img-fluid" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
