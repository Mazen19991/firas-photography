// CarouselSlider.jsx

import React, { useState, useEffect, FC } from "react";
import carouselStyle from "./Carousel.module.css";
import "./CustomCarousel.css";
import image1 from "../../Assets/Website Images/WoodsLake.jpg";
import image2 from "../../Assets/Website Images/AP7A1471.jpg";
import image3 from "../../Assets/Website Images/AP7A3524.jpg";
import Slider from "react-slick";

const Carousel:FC = () => {

  const images = [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
  ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    draggable:true,
    swipeToSlide:true,
    pauseOnFocus:true,
    centerMode: true,
    adaptiveHeight:true,
  };
  return (
    <div className={carouselStyle.carouselContainer}>
      <Slider {...settings}>
      {images.map((image, index) => (
          <div key={index} className={carouselStyle.carouselSlide}>
            <img src={image} alt={`Slide ${index + 1}`} className={carouselStyle.carouselImage}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
