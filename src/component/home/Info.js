import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    const infos = [
      {
        _id: 1,
        image: clock,
        title: "Opening Hours",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorum.",
        bgColor: "bg-gradient-to-r from-secondary to-primary",
      },
      {
        _id: 2,
        image: marker,
        title: "Visit our location",
        description: "Brooklyn, NY 10036, United States",
        bgColor: "bg-accent",
      },
      {
        _id: 3,
        image: phone,
        title: "Contact us now",
        description: "+880 1317 326853",
        bgColor: "bg-gradient-to-r from-secondary to-primary",
      },
    ];

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 px-2'>
            {infos.map(info => <InfoCard
            key={info._id}
            info= {info}
            ></InfoCard>)}
        </div>
    );
};

export default Info;