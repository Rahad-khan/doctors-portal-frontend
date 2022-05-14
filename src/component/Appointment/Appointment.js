import React, { useState } from 'react';
import AppHero from './AppHero';
import AvailableServices from './AvailableServices';
import Footer from "../shared/Footer";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section>
            <AppHero date={date} setDate={setDate}></AppHero>
            <AvailableServices date={date}></AvailableServices>
            <Footer></Footer>
        </section>
    );
};

export default Appointment;