import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const FishAndMeatCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96"
      >
        <SwiperSlide className="border border-red-500">Slide 1</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 2</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 3</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 4</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 5</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 6</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 7</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 8</SwiperSlide>
        <SwiperSlide className="border border-red-500">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default FishAndMeatCard;
