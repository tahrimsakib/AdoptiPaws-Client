import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const slides = [
    {
      img: "/pet1.jpg",
      title: "Change two lives with one adoption — theirs and yours",
    },
    {
      img: "/pet3.jpg",
      title: "Life's better with muddy paws",
    },
    {
      img: "/pet2.jpg",
      title: "Adopt a life, not just a pet",
    },
    {
      img: "/pet4.jpg",
      title: "The Missing Piece of Your Family.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, id) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-[600px]">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
