import React from "react";
import Slider from "../../components/slider/Slider";
import ProductCategory from "../../components/products/product-category/ProductCategory";
import Fruits from "../../components/products/fruits/Fruits";

const Home = () => {
  return (
    <div className="space-y-8">
      <Slider></Slider>

      <ProductCategory></ProductCategory>
      <Fruits></Fruits>
    </div>
  );
};

export default Home;
