import React from 'react';
import Footer from '../shared/Footer';
import Heroarea from './Heroarea';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Heroarea/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Footer/>
        </div>
    );
};

export default Home;