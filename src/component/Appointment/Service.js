import React from 'react';

const Service = ({ service, setTreatment }) => {
  
  const { name, slots } = service;
  return (
    <div className="card max-w-md shadow-md">
      <div className="card-body text-center">
        <h2 className="text-lg text-secondary ">{name}</h2>
        <p>
          <small className={`${slots.length || "text-red-500"}`}>
            {service?.slots?.length ? slots[0] : "No Slot available"}
          </small>
        </p>
        <p>
          <small>{`${slots.length} space available`}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={!slots.length && true}
            htmlFor="booking-modal"
            className={`btn btn-primary ${
              slots.length ? "bg-gradient-to-r from-secondary to-primary" : ""
            }  uppercase font-semibold text-white`}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;