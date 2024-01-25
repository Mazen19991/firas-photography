import React from "react";
import corporateServiceStyle from "./CorporateService.module.css";
import bike1 from "../../Assets/Website Images/Bike1.jpg";
import bike2 from "../../Assets/Website Images/Bike2.jpg";
import bike3 from "../../Assets/Website Images/Bike3.jpg";
import watermark5 from "../../Assets/Watermark5-Shapes.png";
import watermark6 from "../../Assets/Watermark6-Shapes.png";

const CorporateService = () => {

  const HandleContactButton = () => {
    window.open("https://api.whatsapp.com/send?phone=971505752859");
  };
  
  return (
    <div className={corporateServiceStyle.Container} id="Services">
      <div className={corporateServiceStyle.InnerContainer}>
        <div className={corporateServiceStyle.TextContainer}>
          <p>CORPORATE SERVICE</p>
          <h1>I can make your business look and feel professional.</h1>
          <div>
            <button
              className={corporateServiceStyle.Contactbutton}
              onClick={HandleContactButton}
            >
              <p className={corporateServiceStyle.ContactButtonText}>
                CONTACT ME
              </p>
            </button>
          </div>
          <p style={{ color: "#999999" }}>Have a project?</p>
          <p style={{ fontSize: "2rem", fontWeight: "700" }}>Get in touch</p>
        </div>
        <div className={corporateServiceStyle.Image1}>
          <img
            src={bike1}
            alt="Professional Images"
            style={{ width: "30%", objectFit: "contain" }}
          ></img>
        </div>
        <div className={corporateServiceStyle.Image2}>
          <img
            src={bike2}
            alt="Professional Images"
            style={{ width: "30%", objectFit: "contain" }}
          ></img>
        </div>
        <div className={corporateServiceStyle.Image3}>
          <img
            src={bike3}
            alt="Professional Images"
            style={{ width: "30%", objectFit: "contain" }}
          ></img>
        </div>
      </div>
      <div className={corporateServiceStyle.WatermarkContainer}>
        <img
          src={watermark5}
          className={corporateServiceStyle.Watermark}
          alt="watermark"
        ></img>
        <img
          src={watermark6}
          className={corporateServiceStyle.Watermark}
          alt="watermark"
        ></img>
      </div>
    </div>
  );
};

export default CorporateService;
