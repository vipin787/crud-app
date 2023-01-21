import React from "react";
import HeaderCategory from "../components/HeaderCategory";
import Navbar from "../components/Navbar";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <div className="font-link">
      <Navbar />
      <HeaderCategory />
      <ProductSlider />
    </div>
  );
};

export default Home;
