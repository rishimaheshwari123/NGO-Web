import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Virtual,
  Controller,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ slides }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        const activeIndex =
          swiper.activeIndex === slides.length - 1 ? 0 : swiper.activeIndex + 1;
        swiper.slideTo(activeIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [swiper, slides.length]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={setSwiper}
      modules={[
        Navigation,
        Pagination,
        Controller,
        Scrollbar,
        Autoplay,
        Virtual,
        Pagination,
      ]}
      navigation
      controller={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              src={slide.image}
              className=" object-cover w-full lg:w-full "
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 lg:w-[40%] w-[80%]  bg-opacity-50 p-4 text-white">
              <div className="">
                <h2 className="text-2xl  lg:text-4xl font-semibold  ">
                  {slide.title}
                </h2>
                <p className="mt-4 text-xl">{slide.desc}</p>
                <button className=" hidden lg:block px-4 py-2 mt-8 bg-white text-black rounded-full ">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
