import React, { useContext } from "react";
import { UserContext } from "../../../App";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
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
    <nav class="navbar navbar-expand-lg navbar-light container ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto  m-3">
            <li class="nav-item ms-5">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
              </a>
              </Link>
            </li>
         
            <li class="nav-item ms-5">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/dashboard">
                <a class="nav-link " aria-current="page" href="#">
                  About
              </a>
              </Link>
            </li>
            <li class="nav-item ms-5">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/dashboard">
                <a class="nav-link  " aria-current="page" href="#">
                  Dental Services
              </a>
              </Link>
            </li>
          
            <li class="nav-item ms-5 ">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/dashboard">
                <a class="nav-link  " aria-current="page" href="#">
                  Reviews
              </a>
              </Link>
            </li>
            <li class="nav-item ms-5 ">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/dashboard">  <a class="nav-link  " aria-current="page" href="#">
                Blogs
              </a>
              </Link>
            </li>
            <li class="nav-item ms-5 ">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/dashboard">  <a class="nav-link  " aria-current="page" href="#">
                Contact Us
              </a>
              </Link>
            </li>
            <li class="nav-item ms-5 ">
              <Link className="navText " style={{ textDecoration: 'none' }} to="/doctor/dashboard">  <a class="nav-link  " aria-current="page" href="#">
                Dashboard
              </a>
              </Link>
            </li>

            <li class="nav-item dropdown ms-5">
              <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={loggedIndUser.photo} style={{ height: '30px', borderRadius: '20px' }} alt="" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">{loggedIndUser.name}</a></li>
                <li><a onClick={singOut} class="dropdown-item" href="#">Sing Out</a></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nevbar;
