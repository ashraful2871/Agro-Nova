import React from "react";
const categories = [
  {
    title: "Breakfast & Snacks",
    image: "/images/snacks.png",
    bg: "bg-rose-50",
  },
  {
    title: "Fish & Meat",
    image: "../../../public/picture/fish and meat.jpg",
    bg: "bg-yellow-50",
  },
  {
    title: "Fruits",
    image: "../../../public/picture/fruts.jpeg",
    bg: "bg-lime-50",
  },
  {
    title: "Kitchen & Cooking",
    image: "../../../public/picture/kitchen and cooking.jpg",
    bg: "bg-sky-50",
  },
  {
    title: "Mango",
    image: "../../../public/picture/Mangoe.webp",
    bg: "bg-green-50",
  },
  { title: "Monthly Bazar", image: "/images/monthly.png", bg: "bg-amber-50" },
  { title: "Organic Herbals", image: "/images/herbals.png", bg: "bg-pink-50" },
  {
    title: "Vegetables",
    image: "../../../public/picture/vegetables.webp",
    bg: "bg-yellow-100",
  },
];
const ProductCategory = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-green-600">
          Our Products Category
        </h2>
        <a href="#" className="text-green-600 font-medium hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`card shadow-sm hover:shadow-md transition duration-300 ${cat.bg} rounded-xl border border-red-500 `}
          >
            <div className="card-body flex flex-row gap-4 items-center text-center border border-red-500">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-20 h-20 rounded-full  mb-3 border border-red-500"
                />
              </div>
              <h3 className="text-xl font-medium">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
