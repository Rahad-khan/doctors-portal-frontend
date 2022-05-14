import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
      {
        _id: 1,
        image: people1,
        name: "John Wick",
        review:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
      },
      {
        _id: 2,
        image: people2,
        name: "Emma Watson",
        review:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
      },
      {
        _id: 3,
        image: people3,
        name: "Brandon Taylor",
        review:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
      },
    ];
    return (
      <section className="px-6 md:px-12 my-12">
        <div className="flex justify-between mb-8">
          <div>
            <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
            <h2 className="text-3xl ">What Our Patients Says</h2>
          </div>
          <img className="w-32 md:w-48" src={quote} alt="" />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {reviews.map((review) => (
            <div key={review._id} className="card max-w-md shadow-xl">
              <div className="card-body">
                <p>{review.review}</p>
                <div className='flex justify-center items-center mt-3'>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.image} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;