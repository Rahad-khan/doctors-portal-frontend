import React from "react";
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import Button from "../shared/Button";

const Heroarea = () => {
  return (
    <div style={{
        background: `url(${bg})`,
        backgroundSize: 'cover'
    }} className="hero min-h-screen">
      <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-lg rounded-lg shadow-2xl"
          alt="doctors chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
