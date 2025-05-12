import React from "react";
import FruitsCard from "./FruitsCard";

const Fruits = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-green-600">Fruits</h2>
        <a href="#" className="text-green-600 font-medium hover:underline">
          View All
        </a>
      </div>

      <FruitsCard></FruitsCard>
    </>
  );
};

export default Fruits;
