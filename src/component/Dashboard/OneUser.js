import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const OneUser = ({ user, serial, refetch }) => {
  const { email, role } = user;

  const makeAdmin = async () => {
    const { data } = await axios.put(
      `http://localhost:5000/user/admin/${email}`,
      null,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
    .catch(error => {
        if(error?.response?.status === 403){
           return toast.error("failed to make admin")
        }
    })
    console.log(data);
    if (data?.modifiedCount > 0) {
      toast.success("Your Are Admin Now");
      refetch();
    }
  };
  return (
    <tr>
      <th>{serial}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs mr-3">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default OneUser;