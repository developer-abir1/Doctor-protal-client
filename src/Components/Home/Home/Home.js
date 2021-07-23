import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Share/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    document.title = 'Docotr Protal';


    return (
        <div>

            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>

            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>

            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;