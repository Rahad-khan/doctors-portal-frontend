import React from 'react';
import fluoride  from '../../assets/images/fluoride.png'
import cavity  from '../../assets/images/cavity.png'
import whitening  from '../../assets/images/whitening.png'
import treatment  from '../../assets/images/treatment.png'
import ServiceCard from './ServiceCard';
import Button from '../shared/Button';

const Services = () => {
    const services = [
      {
        _id: 1,
        image: fluoride,
        title: "Fluoride Treatment",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        _id: 2,
        image: cavity,
        title: "Cavity Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        _id: 3,
        image: whitening,
        title: "Teeth Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
    ];
    return (
      <div>
        <div className="text-center mt-10 mb-4">
          <h4 className="text-xl font-bold text-secondary">OUR SERVICES</h4>
          <h2 className="text-3xl">Services We Provide</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className='md:w-3/4 mx-auto my-16'>
          <div className="hero">
            <div className="hero-content gap-8 flex-col lg:flex-row">
              <img
                src={treatment}
                className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold">
                  Exceptional Dental Care, on Your Terms
                </h1>
                <p className="py-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </p>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;