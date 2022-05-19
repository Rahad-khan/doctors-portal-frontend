import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const loadAppointment = async () => {
                const { data } = await axios.get(`http://localhost:5000/booking?email=${user.email}`, {
                  headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                  }
                })
                .catch(error =>  {
                  if (
                    error?.response?.status === 401 ||
                    error?.response?.status === 403
                  ) {
                    navigate('/')
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                  }
                })
                ;
                setAppointment(data);
            }
            loadAppointment()
    }}, [user, navigate])
  return (
    <div>
      <div>
        <h1 className="font-semibold text-3xl">My appointment</h1>

        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {appointment.map((a, index) => (
                <tr key={index}>
                  <th>{++index}</th>
                  <td>{a.patientName}</td>
                  <td>{a?.slot}</td>
                  <td>{a?.date}</td>
                  <td>{a?.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
