import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doc from '../../assets/images/doctor-small.png';
import Button from '../shared/Button';

const MakeAppointment = () => {
    return (
      <div
        style={{
          background: `url(${appointment})`,
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center mt-44"
      >
        <img className="flex-1 hidden md:block mt-[-100px]" src={doc} alt="" />
        <div className="flex-1 space-y-4 p-5">
          <h1 className="text-secondary font-bold text-md">Appointment</h1>
          <h2 className="text-white text-3xl ">Make an appointment Today</h2>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Sarted</Button>
        </div>
      </div>
    );
};

export default MakeAppointment;