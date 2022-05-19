import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../shared/Spinner';
import OneUser from './OneUser';

const Users = () => {

    const {data, isLoading, refetch} = useQuery("allUsers", async() => {
        return await axios.get("http://localhost:5000/user", {
            headers:{
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    })
    if (isLoading) {
        return <Spinner></Spinner>
        
    }
    const users = data?.data;
    return (
      <div>
        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Operation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <OneUser
                  serial={++index}
                  key={user._id}
                  refetch={refetch}
                  user={user}
                ></OneUser>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;