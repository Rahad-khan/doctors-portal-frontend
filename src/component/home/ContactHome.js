import React from 'react';
import appointment from "../../assets/images/appointment.png";
import Button from '../shared/Button';

const ContactHome = () => {
    const handleContact = e => {
        e.preventDefault();
    }
    return (
      <section
        style={{
          background: `url(${appointment})`,
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center mt-44 py-10"
      >
        <div className="w-11/12 md:w-1/3">
          <div className="text-center mt-10 mb-4">
            <h4 className="text-xl font-bold text-secondary">Contact Us</h4>
            <h2 className="text-3xl text-white">Stay connected with us</h2>
          </div>
          <form className="space-y-5" onSubmit={handleContact}>
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full "
            />
            <input type="text" placeholder="Subject" className="input w-full " />
            <textarea
              className="textarea w-full"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <div className="flex justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    );
};

export default ContactHome;