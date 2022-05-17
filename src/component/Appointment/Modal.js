import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Modal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;
  const handleOrderTreatment = (e) => {
    e.preventDefault();
    const day = e.target.day.value;
    const time = e.target.time.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const tel = e.target.tel.value;
    console.log(day, time, name, email, tel);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <form className="mt-6 space-y-4" onSubmit={handleOrderTreatment}>
            <input
              type="text"
              name="day"
              value={format(date, "PP")}
              disabled
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <select name="time" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              required
              type="text"
              name="name"
              disabled
              value={user?.displayName || " "}
              className="input w-full input-bordered"
            />
            <input
              required
              type="email"
              name="email"
              disabled
              value={user?.email || " "}
              className="input w-full input-bordered"
            />
            <input
              required
              type="tel"
              name="tel"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
