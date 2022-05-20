import React from 'react';

const DoctorRow = ({ serial, refetch ,doc}) => {
    const { email, _id, name, speciality } = doc;
  return (
    <tr>
      <th>{serial}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
    </tr>
  );
};

export default DoctorRow;