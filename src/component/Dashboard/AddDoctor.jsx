import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../shared/Spinner';

const AddDoctor = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();

    const { data, isLoading, refetch } = useQuery("services", async () => {
      return await axios.get("http://localhost:5000/services", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    });
    
    
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const services = data?.data;

    const image_apikey = "3bdc4df42fd264f70716cd31d9e7d4f7";
    const onSubmit = async (data) => {
        const formData = new FormData();
        const image = data.image[0]
        formData.append("image", image);
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${image_apikey}`, formData);
        const data1 = response.data;
        console.log(data1);
        if(data1.success){
            const img = data1.data.url;
            const doctor = {
              name: data.name,
              email: data.email,
              speciality: data.specoality,
              img
            };
            const response = await axios.post(
              `http://localhost:5000/doctors`,
              doctor,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
              }
            );
            console.log(response);
            if (response.data.insertedId) {
                toast.success("Doctor Added Successfully");
                reset();
            };
        }
        

    };
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-2xl mb-4">Add A Doctor</h1>
        <div className="w-96 shadow-xl p-4 ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Provide a valid email",
                  },
                })}
                type="email"
                placeholder="Doctor's Email"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select {...register("specoality")} className="select select-bordered w-full">
                {services?.map((service) => (<option key={service._id}>{service.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Add Image of Doctor</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required",
                  },
                })}
                type="file"
                className="input w-full"
              />
              <label className="label mb-2">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <input type="submit" className="btn w-full" value="Add" />
          </form>
        </div>
      </div>
    );
};

export default AddDoctor;