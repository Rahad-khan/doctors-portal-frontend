import React, { useState } from 'react';
import { format } from "date-fns";
import axios from 'axios';
import Service from './Service';
import Modal from './Modal';
import { useQuery } from 'react-query';
import Spinner from '../shared/Spinner';



const AvailableServices = ({date}) => {
  const [treatment, setTreatment] = useState(null);
  const formatDate = format(date, "PP")

  const {data, isLoading, refetch} = useQuery(["available", formatDate], async () => {
    return await axios.get(
      `http://localhost:5000/available?date=${formatDate}`
    );
  });
  console.log(data);
  if(isLoading) {
    return <Spinner></Spinner>
  }
    return (
      <section className="my-16 px-12">
        <div>
          <h2 className="text-center text-xl text-secondary">
            Available Services on {format(date, "PP")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {data?.data?.map((service) => (
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
            refetch={refetch}
          ></Modal>
        )}
      </section>
    );
};

export default AvailableServices;