// CarouselSlider.jsx

import React, { useState, useEffect, FC } from "react";
import carouselStyle from "./CarouselSlider.module.css";
import image1 from "../../../Assets/Website Images/WoodsLake.jpg";
import image2 from "../../../Assets/Website Images/AP7A1471.jpg";
import image3 from "../../../Assets/Website Images/AP7A3524.jpg";
import Slider from "react-slick";

interface CarouselSliderProps {
  mediaChange: boolean;
}

const CarouselSlider: FC<CarouselSliderProps> = (mediaChange) => {
  let images: string[] = [];

  if (!mediaChange.mediaChange) {
    images = [image1, image2, image3, image1];
  } else if (mediaChange.mediaChange) {
    images = [image3, image2, image1];
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    pauseOnFocus: true,
    centerMode: true,
  };
  return (
    <div className={carouselStyle.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={carouselStyle.carouselSlide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={carouselStyle.carouselImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
