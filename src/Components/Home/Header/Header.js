import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nevbar from '../Nevbar/Nevbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div class="header-container">
         <Nevbar></Nevbar>
         <HeaderMain></HeaderMain>
         <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;