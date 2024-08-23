'use client'

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
}

export const Carrousel: React.FC = () => {
  const slides: Slide[] = [
    { url: "/images/lechona.jpg" },
    { url: "/images/tamal-lechongori.jpg" },
    { url: "/images/tamal-lechona-lechongori.jpg" },
    { url: "/images/carne-llanera-lechongori.jpg" },
    { url: "/images/sancocho-lechongori.jpg" },
    { url: "/images/costillas-bbq-lechongori.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className='max-w-[1200px] h-[680px] w-full m-auto pb-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>


      <div
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>


      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};
