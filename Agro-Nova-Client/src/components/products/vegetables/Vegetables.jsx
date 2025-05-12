import React from "react";
import VegetableCard from "./VegetableCard";

const Vegetables = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-green-600">
          Vegetables
        </h2>
        <a href="#" className="text-green-600 font-medium hover:underline">
          View All
        </a>
      </div>
      <VegetableCard></VegetableCard>
    </>
  );
};

export default Vegetables;
