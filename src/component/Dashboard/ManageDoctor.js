import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../shared/Spinner';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const {data, isLoading, refetch} = useQuery("allDoctors", async () =>
      axios.get(`http://localhost:5000/doctors`, {
          headers: {
              authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
      })
    );
    if (isLoading) {
     return <Spinner></Spinner>
    }
    const doctors = data?.data
    return (
      <>
        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Speciality</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doc, index) => (
                <DoctorRow
                  serial={++index}
                  key={doc._id}
                  refetch={refetch}
                  doc={doc}
                ></DoctorRow>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default ManageDoctor;