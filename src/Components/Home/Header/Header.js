import React from "react";
import "./Header.css";
import HeaderMain from "../HeaderMain/HeaderMain";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Nevbar from "../../Share/Nevbar/Nevbar";

const Header = () => {
  return (
    <div class="header-container ">
      <Nevbar></Nevbar>
      <HeaderMain></HeaderMain>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
