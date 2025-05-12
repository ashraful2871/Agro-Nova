import React from "react";
import Slider from "../../components/slider/Slider";
import ProductCategory from "../../components/products/product-category/ProductCategory";
import Fruits from "../../components/products/fruits/Fruits";
import FishAndMeat from "../../components/products/fish And MEat/FishAndMeat";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* slider */}
      <Slider></Slider>

      {/* product category */}
      <ProductCategory></ProductCategory>

      {/* fruits section */}
      <Fruits></Fruits>

      {/* fish and meat section */}
      <FishAndMeat></FishAndMeat>
    </div>
  );
};

export default Home;
