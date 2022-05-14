import React from "react";
import Footer from "../shared/Footer";
import Heroarea from "./Heroarea";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Heroarea />
      <section className="px-12">
        <Info />
        <Services />
      </section>
      <MakeAppointment />
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default Home;
