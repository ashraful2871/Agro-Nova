import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const FruitsCard = () => {
  const fruits = [
    {
      id: 1,
      name: "Mango",
      image: "https://i.ibb.co.com/9HWqP1Pw/Mangoe.jpg",
      price: 120,
      kg: "1kg",
    },
    {
      id: 2,
      name: "Litchi",
      image: "https://i.ibb.co.com/s9Ydc4N6/Litchi.jpg",
      price: 200,
      kg: "500g",
    },
    {
      id: 3,
      name: "Banana",
      image: "https://i.ibb.co.com/FLSSnNYz/Bananas-jpg.webp",
      price: 60,
      kg: "1 dozen",
    },
    {
      id: 4,
      name: "Apple",
      image: "https://i.ibb.co.com/5xw8YxTc/Apple.jpg",
      price: 150,
      kg: "1kg",
    },
    {
      id: 5,
      name: "Guava",
      image: "https://i.ibb.co.com/SwWrGNdb/Guavav.jpg",
      price: 40,
      kg: "1kg",
    },
    {
      id: 6,
      name: "Pineapple",
      image: "https://i.ibb.co.com/sJ9mymjJ/Pineapple.jpg",
      price: 100,
      kg: "1 piece",
    },
    {
      id: 7,
      name: "Papaya",
      image: "https://i.ibb.co.com/tMMk0GyY/Papaya.webp",
      price: 50,
      kg: "1kg",
    },
    {
      id: 8,
      name: "Orange",
      image: "https://i.ibb.co.com/4gV68tgn/Oranges.webp",
      price: 80,
      kg: "1kg",
    },
    {
      id: 9,
      name: "Watermelon",
      image: "https://i.ibb.co.com/qLMsFm9n/Watermelon.jpg",
      price: 90,
      kg: "1 piece",
    },
    {
      id: 10,
      name: "Strawberry",
      image: "https://i.ibb.co.com/v45gKVYN/Strawberry.jpg",
      price: 300,
      kg: "500g",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96"
      >
        {fruits.map((fruit) => (
          <SwiperSlide key={fruit.id} className="!flex !p-0 ">
            <div className="w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 space-y-5">
              <div className="w-full h-40 overflow-hidden rounded-t-2xl">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-green-700">
                  {fruit.name}
                </h2>
                <p className="text-sm text-gray-500">{fruit.kg}</p>
                <p className="text-md font-semibold text-red-500">
                  ৳{fruit.price}
                </p>
                <button className="mt-2 btn btn-success bg-green-600 text-white text-base  btn-sm rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FruitsCard;
