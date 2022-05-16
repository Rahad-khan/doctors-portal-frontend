import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import axios from 'axios';
import Button from '../shared/Button';
import Service from './Service';
import Modal from './Modal';



const AvailableServices = ({date}) => {
  const [services, setServices] = useState([]); 
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const {data} =await axios.get('services.json');
      setServices(data)
    }
    getData();
  }, []);
    return (
      <section className="my-16 px-12">
        <div>
          <h2 className="text-center text-xl text-secondary">
            Available Services on {format(date, "PP")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {services.map((service) => (
              <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
              ></Service>
            ))}
          </div>
        </div>
        {treatment && (
          <Modal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
          ></Modal>
        )}
      </section>
    );
};

export default AvailableServices;