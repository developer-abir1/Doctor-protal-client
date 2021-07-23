import React, { useContext } from "react";
import { UserContext } from "../../../App";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStethoscope, faUser } from '@fortawesome/free-solid-svg-icons'
import { handleSingOut } from "../../Login/Login/LoginManger";
import { Link } from "react-router-dom";

const Nevbar = () => {


  const [loggedIndUser, setLoggedIndUser] = useContext(UserContext);

  const singOut = () => {
    handleSingOut()
      .then(res => {
        setLoggedIndUser(res)

      })
  }


  return (
    <div className="navSection  container-fluid" id="colorItem">

      <nav className="navbar navbar-expand-lg navbar-light  py-3" >

        <Link to="/" style={{ textDecoration: "none" }} >
          <h4 className=" text-brands" >  <span className="text-logo"><FontAwesomeIcon icon={faStethoscope} />Dental</span>Care</h4>


        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav ms-auto  text-uppercase  ">
            <li className="nav-item ms-5  ">
              <Link to="/" style={{ textDecoration: "none", }} className="navHover" > <a className="nav-link active text-gray navhovers" aria-current="page" href="#">
                Home
              </a>
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link to="/" style={{ textDecoration: "none" }} className="navHover" > <a className="nav-link  text-gray navhovers" href="#">
                About
              </a>
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link to="/" style={{ textDecoration: "none" }} className="navHover"> <a className="nav-link text-gray navhovers" href="#">
                Service
              </a>
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link to="/" style={{ textDecoration: "none" }} className="navHover"> <a className="nav-link text-white navhovers" href="#">
                Appoinment
              </a>
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link to="/" style={{ textDecoration: "none" }} className="navHover"> <a className="nav-link text-white navhovers" href="#">
                Dashboard
              </a>
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link to="/" style={{ textDecoration: "none" }} className="navHover">   <a className="nav-link text-white navhovers" href="#">
                Contact us
              </a>
              </Link>
            </li>


          </ul>
        </div>

      </nav>
    </div>

  );
};

export default Nevbar;
