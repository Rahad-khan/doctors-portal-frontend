import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppHero = ({date,setDate}) => {
  
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="md:max-w-lg rounded-lg shadow-2xl"
          alt="doctors chair"
        />
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
      </div>
    </div>
  );
};

export default AppHero;
