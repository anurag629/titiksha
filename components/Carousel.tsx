"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/images/carousel/1.jpg",
      caption: "Slide 1",
    },
    {
      id: 2,
      image: "/images/carousel/2.jpg",
      caption: "Slide 2",
    },
    {
      id: 3,
      image: "/images/carousel/3.jpg",
      caption: "Slide 3",
    },
    {
      id: 4,
      image: "/images/carousel/4.jpg",
      caption: "Slide 4",
    },
    {
      id: 5,
      image: "/images/carousel/5.jpg",
      caption: "Slide 5",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
  
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              className="absolute inset-0 object-cover w-full h-full"
              alt={slide.caption}
            //   width={800}
            //   height={800}
              fill={true}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black rounded-full cursor-pointer -translate-y-1/2 hover:bg-gray-800 focus:outline-none"
        onClick={handlePrevSlide}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black rounded-full cursor-pointer -translate-y-1/2 hover:bg-gray-800 focus:outline-none"
        onClick={handleNextSlide}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

  );
};

export default Carousel;