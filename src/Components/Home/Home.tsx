import React from "react";
import Picture from "../../Assets/Firas.png";
import homeStyle from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={homeStyle.Container}>
        <div className={homeStyle.LeftContainer}>
          <p className={homeStyle.TiltedText}>ONLINE PORTFOLIO</p>
          <div className={homeStyle.NameContainer}>
            <h1 className={homeStyle.Name}>
              Firas <br></br> Bou Hatoum
            </h1>
            <button className={homeStyle.ContactButton}>
              <p className={homeStyle.ContactButtonText}>Contact Me</p>
            </button>
          </div>
        </div>
        <div className={homeStyle.RightContainer}>
          <img src={Picture} alt="Firas Bou Hatoum" width="75%" style={{marginTop:"7.5rem"}}/>
        </div>

      </div>
    </>
  );
}

export default Home;
