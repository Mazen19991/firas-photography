import React, { useState } from "react";
import portfolioStyle from "./Portfolio.module.css";
import CarouselSlider from "./Carousel";

function Portfolio() {
  const [mediaChange, setMediaChange] = useState(false);

  const photoChange = () => {
    setMediaChange(false);
  };
  const videoChange = () => {
    setMediaChange(true);
  };

  return (
    <div className={portfolioStyle.Container}>
      <div className={portfolioStyle.titleContainer}>
        <p>PORTFOLIO</p>
      </div>
      <div className={portfolioStyle.subTitleContainer}>
        {mediaChange ? (
          <h1>CREATIVE VIDEO PROJECTS</h1>
        ) : (
          <h1>CREATIVE PHOTO PROJECTS</h1>
        )}
      </div>
      <div className={portfolioStyle.carouselContainer}>
        <CarouselSlider/>
      </div>
      <div className={portfolioStyle.buttonContainer}>
        <div>
          <button onClick={photoChange}>Photos</button>
        </div>
        <div>
          <button onClick={videoChange}>Videos</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
