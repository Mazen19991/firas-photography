import React, { FC } from "react";
import carouselStyle from "./CarouselSlider.module.css";
import image1 from "../../../Assets/Website Images/WoodsLake.jpg";
import image2 from "../../../Assets/Website Images/AP7A1471.jpg";
import image3 from "../../../Assets/Website Images/AP7A3524.jpg";
import { Carousel } from "react-carousel-minimal";

const CarouselSlider: FC = (Images) => {
  const data = [{ image: image1 }, { image:image2 }, { image:image3  }];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div
      style={{
        padding: "0 20px",
      }}
      className={carouselStyle.carouselContainer}
    >
      <Carousel
        data={data}
        time={5000}
        width="100%"
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
};

export default CarouselSlider;
