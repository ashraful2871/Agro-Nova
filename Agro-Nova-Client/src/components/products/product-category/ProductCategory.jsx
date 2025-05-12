const categories = [
  {
    title: "Breakfast & Snacks",
    image: "https://i.ibb.co.com/DPwTthPs/Breakfast-Snacks.jpg",
    bg: "bg-rose-50",
  },
  {
    title: "Fish & Meat",
    image: "https://i.ibb.co.com/jCqMQyF/fish-and-meat.jpg",
    bg: "bg-yellow-50",
  },
  {
    title: "Fruits",
    image: "https://i.ibb.co.com/xtvyL2L0/fruts.jpg",
    bg: "bg-lime-50",
  },
  {
    title: "Kitchen & Cooking",
    image: "https://i.ibb.co.com/fcFv13V/kitchen-and-cooking.jpg",
    bg: "bg-sky-50",
  },
  {
    title: "Mango",
    image: "https://i.ibb.co.com/20HRJNS0/Mangoe.jpg",
    bg: "bg-green-50",
  },

  {
    title: "Vegetables",
    image: "https://i.ibb.co.com/WvkQvYLc/vegetables.webp",
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
            className={`card shadow-sm hover:shadow-md transition duration-300 ${cat.bg} rounded-xl  border`}
          >
            <div className="card-body flex flex-row gap-4 items-center text-center ">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-20 h-20 rounded-full  mb-3 "
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
