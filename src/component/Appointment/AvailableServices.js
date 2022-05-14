import React from 'react';
import { format } from "date-fns";



const AvailableServices = ({date}) => {
    const services = [
      "Teeth Orthodontics",
      "Cosmetic Dentistry",
      "Teeth Cleaning",
      "Cavity Protection",
      "Pediatric Dental",
      "Oral Surgery"
    ];
    return (
      <section className="my-16 px-12">
        <div className="text-center text-xl">
          <h2 className=" text-secondary">
            Available Services on {format(date, "PP")}
          </h2>
          <h2 className="text-slate-400">Please select a service.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} class="card w-96 bg-base-100 shadow-md">
              <div class="card-body">
                <h2 class="text-lg text-secondary text-center">{service}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default AvailableServices;