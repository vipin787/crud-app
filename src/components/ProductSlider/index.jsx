import React from "react";
import Slider from "react-slick";

const ProductSlider = () => {
  return (
    <div>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        width={400}
      >
        <div>1 ProductSlider</div>
        <div>2 ProductSlider</div>
        <div>3 ProductSlider</div>
        <div>4 ProductSlider</div>
        <div>5 ProductSlider</div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
