import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../../public/picture/Green and White Organic Fruits and Vegetables YouTube Thumbnail.png";
import slide2 from "../../../public/picture/veggetable.jpg";
import slide3 from "../../../public/picture/Mangoe.webp";
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" h-[200px] md:h-[500px] rounded-2xl"
      >
        <SwiperSlide>
          <div className="w-full">
            {" "}
            <img src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={slide3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
