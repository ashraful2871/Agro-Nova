import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const FishAndMeatCard = () => {
  const items = [
    {
      id: 1,
      type: "Fish",
      name: "Rui",
      image: "https://i.ibb.co.com/bjB834WB/rui.webp",
      price: 300,
      kg: "1kg",
    },
    {
      id: 2,
      type: "Fish",
      name: "Hilsa",
      image: "https://i.ibb.co.com/Dxf0y63/Hilsa.jpg",
      price: 1200,
      kg: "1kg",
    },
    {
      id: 3,
      type: "Fish",
      name: "Pabda",
      image: "https://i.ibb.co.com/gbw6J68k/Pabda.jpg",
      price: 500,
      kg: "1kg",
    },
    {
      id: 4,
      type: "Meat",
      name: "Beef",
      image: "https://i.ibb.co.com/wNS8v2Hx/Beef.webp",
      price: 750,
      kg: "1kg",
    },
    {
      id: 5,
      type: "Meat",
      name: "Chicken",
      image: "https://i.ibb.co.com/4Rkv8TFp/Chicken.jpg",
      price: 220,
      kg: "1kg",
    },
    {
      id: 6,
      type: "Meat",
      name: "Mutton",
      image: "https://i.ibb.co.com/Y4vLk51Z/Mutton.jpg",
      price: 900,
      kg: "1kg",
    },
  ];

  return (
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
      {items.map((item) => (
        <SwiperSlide key={item.id} className="!flex !p-0">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 space-y-5">
            <div className="w-full h-40 overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-green-700">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.kg}</p>
              <p className="text-md font-semibold text-red-500">
                ৳{item.price}
              </p>
              <button className="mt-2 btn btn-success bg-green-600 text-white text-base btn-sm rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FishAndMeatCard;
