import React from 'react';

const InfoCard = ({info}) => {
    const {image, title, description, bgColor} = info;
    return (
      <div className={`card lg:card-side pt-4 md:pt-0 md:px-5 shadow-xl ${bgColor}`}>
        <figure>
          <img src={image} alt="information" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default InfoCard;