import React from "react";
import droneStyle from "./Drone.module.css";
import watermark from "../../Assets/FirasMultipleWatermark7.png";
import bike1 from "../../Assets/Website Images/Bike1.jpg";
import bike2 from "../../Assets/Website Images/Bike2.jpg";

const Drone = () => {
  return (
    <div className={droneStyle.Container}>
      <div className={droneStyle.InnerContainer}>
        <div className={droneStyle.TextContainer}>
          <h1>DRONE VIDEOGRAPHER</h1>
          <div>
            <button className={droneStyle.Contactbutton}>
              <p className={droneStyle.ContactButtonText}>See More</p>
            </button>
          </div>
        </div>
        <div className={droneStyle.Image1}>
          <img
            src={bike1}
            alt="Professional Images"
            style={{ width: "30%", objectFit: "contain" }}
          ></img>
        </div>
        <div className={droneStyle.Image2}>
          <img
            src={bike2}
            alt="Professional Images"
            style={{ width: "30%", objectFit: "contain" }}
          ></img>
        </div>
      </div>
      <div className={droneStyle.WatermarkContainer}>
        <img
          src={watermark}
          className={droneStyle.Watermark}
          alt="watermark"
        ></img>
      </div>
    </div>
  );
};

export default Drone;
