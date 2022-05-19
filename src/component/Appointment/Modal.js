import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Modal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const handleOrderTreatment = async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const bookingData = {
      treatmentId: _id,
      treatment: name,
      date,
      slot,
      phone: e.target.tel.value,
      userId: user.email,
      patientName: user.displayName,
    };
    const url = "http://localhost:5000/booking";
    const { data } = await axios.post(url, bookingData);
    console.log(data);
    if (data?.success) {
      toast.success(`Appointment is sate on ${date} at ${slot}`);
    } else {
      toast.error(
        `Already Have An Appointment on ${data?.booking?.date} at ${data?.booking?.slot}`
      );
    };
    refetch()
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
              name="date"
              value={format(date, "PP")}
              disabled
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
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
