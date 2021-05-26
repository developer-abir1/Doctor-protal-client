import React from "react";
import './Navbar.css'

const Nevbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link " aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link  " aria-current="page" href="#">
                Dental Services
              </a>
            </li>
            <li class="nav-item ms-5 ">
              <a class="nav-link  " aria-current="page" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item ms-5 ">
              <a class="nav-link  " aria-current="page" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item ms-5 ">
              <a class="nav-link  " aria-current="page" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nevbar;
