import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const VegetableCard = () => {
  const vegetables = [
    {
      id: 1,
      name: "Carrot",
      image: "https://i.ibb.co.com/23VtzHF2/Carrot.webp",
      price: 40,
      kg: "1kg",
    },
    {
      id: 2,
      name: "Tomato",
      image: "https://i.ibb.co.com/KpPkGv8D/Tomato.webp",
      price: 30,
      kg: "1kg",
    },
    {
      id: 3,
      name: "Potato",
      image: "https://i.ibb.co.com/qLr7wg67/Potato.jpg",
      price: 25,
      kg: "1kg",
    },
    {
      id: 4,
      name: "Onion",
      image: "https://i.ibb.co.com/hRFDGbgv/Onion.jpg",
      price: 50,
      kg: "1kg",
    },
    {
      id: 5,
      name: "Spinach",
      image: "https://i.ibb.co.com/yB8qBvZQ/Spinach.jpg",
      price: 15,
      kg: "1 bunch",
    },
    {
      id: 6,
      name: "Cucumber",
      image: "https://i.ibb.co.com/TB4mKj76/Cucumber.jpg",
      price: 20,
      kg: "1kg",
    },
    {
      id: 7,
      name: "Green Chili",
      image: "https://i.ibb.co.com/wZ82wjz4/Green-Chili.jpg",
      price: 10,
      kg: "100g",
    },
    {
      id: 8,
      name: "Cauliflower",
      image: "https://i.ibb.co.com/6c02MXK7/Cauliflower.webp",
      price: 35,
      kg: "1 piece",
    },
    {
      id: 9,
      name: "Broccoli",
      image: "https://i.ibb.co.com/WW4hgM2K/Broccoli.jpg",
      price: 60,
      kg: "1 piece",
    },
  ];

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
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
      {vegetables.map((veg) => (
        <SwiperSlide key={veg.id} className="!flex !p-0">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 space-y-5">
            <div className="w-full h-40 overflow-hidden rounded-t-2xl">
              <img
                src={veg.image}
                alt={veg.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-green-700">{veg.name}</h2>
              <p className="text-sm text-gray-500">{veg.kg}</p>
              <p className="text-md font-semibold text-red-500">৳{veg.price}</p>
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

export default VegetableCard;
