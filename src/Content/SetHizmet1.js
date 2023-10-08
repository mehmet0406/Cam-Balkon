import React from 'react';

export default function SetHizmet1({ hizmet1: { image, title, id } }) {
  const isEven = id % 2 === 0;
  const addAos= isEven ? 'fade-left' : 'fade-right';

  return (
    <div className="flex justify-center " 
    data-aos={`${addAos}`}
    data-aos-once="true"
    data-aos-delay="5000">
      <div className="bg-white flex justify-center flex-col px-6 sm:px-8 md:px-9 pt-4 pb-2 md:pt-7    shadow-2xl rounded-3xl group">
        <img
          src={image}
          alt=""
          className="h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44 rounded-2xl group-hover:scale-105 transition-all duration-200 ease-linear object-cover"
        />
        <h2 className="w-full justify-center flex baslik mt pt-4 font-semibold text-lg md:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
