// Home.tsx
import React, { FC, useState, useEffect } from "react";
import Picture1 from "../../Assets/Firas.png";
import Picture2 from "../../Assets/Website Images/AP7A3524.jpg";
import Watermark1 from "../../Assets/WatermarkFiras.svg";
import Watermark2 from "../../Assets/Watermark2Signature.svg";
import homeStyle from "./Home.module.css";
import Header from "../../Components/Layout/Header/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Fade, Slide } from "@mui/material";
import Portfolio from "../Portfolio";
import Accomplishments from "../Accomplishment";
import Feedback from "../Feedback";
import Collection from "../Collection";
import CorporateService from "../CorporateService";
import Drone from "../Drone/Drone";
import Footer from "../../Components/Layout/Footer";

const Home: FC = () => {
  const [change, setChange] = useState(false);
  const imageTransition = React.useRef<HTMLDivElement>(null);


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to new data after 5 seconds
      setChange(true);

      // Reset to original data after another 5 seconds
      setTimeout(() => {
        setChange(false);
      }, 10000);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <div className={homeStyle.Container}>
        <div className={homeStyle.LeftContainer}>
          <div>
            <p className={homeStyle.TiltedText}>ONLINE PORTFOLIO</p>
          </div>
          <div className={homeStyle.NameContainer}>
            <Fade in={!change} timeout={500} unmountOnExit>
              <h1 className={homeStyle.Name}>
                {!change && (
                  <>
                    Firas <br /> Bou Hatoum
                  </>
                )}
              </h1>
            </Fade>
            <Fade in={change} timeout={500} unmountOnExit>
              <h1 className={homeStyle.Name}>
                {change && (
                  <>
                    About <br /> Me
                  </>
                )}
              </h1>
            </Fade>
            <div className={homeStyle.buttonContainer}>
              <Fade in={!change} timeout={500} unmountOnExit>
                <div>
                  {!change && (
                    <button className={homeStyle.ContactButton}>
                      <p className={homeStyle.ContactButtonText}>Contact me</p>
                    </button>
                  )}
                </div>
              </Fade>
              <Fade in={change} timeout={500} unmountOnExit>
                <div>
                  {change && (
                    <p className={homeStyle.TextElement}>
                      Your Text Here - About Me Description...Your Text Here -
                      About Me Description...Your Text Here - About Me
                      Description...Your Text Here - About Me Description...Your
                      Text Here - About Me Description...Your Text Here - About
                      Me Description...Your Text Here - About Me
                      Description...Your Text Here - About Me Description...Your
                      Text Here - About Me Description...Your Text Here - About
                      Me Description...Your Text Here - About Me
                      Description...Your Text Here - About Me Description...Your
                      Text Here - About Me Description...
                    </p>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className={homeStyle.RightContainer}>
          <div className={homeStyle.ImageContainer} ref={imageTransition}>
            {!change && (
              <Slide
                container={imageTransition.current}
                in={!change}
                direction="right"
                timeout={{ enter: 500, appear: 500, exit: 500 }}
              >
                <img
                  src={Picture1}
                  alt="Firas Bou Hatoum"
                  style={{
                    // transform: change ? "translateX(-100%)" : "translateX(0)",
                    objectFit: "contain",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Slide>
            )}
            {change && (
              <Slide
                container={imageTransition.current}
                in={change}
                direction="left"
                timeout={{ enter: 500, appear: 500, exit: 500 }}
              >
                <img
                  src={Picture2}
                  alt="Firas Bou Hatoum"
                  style={{
                    // transform: change ? "translateX(-100%)" : "translateX(0)",
                    objectFit: "contain",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Slide>
            )}
          </div>
          <div className={homeStyle.IconContainer}>
            <a
              href="https://www.facebook.com"
              className={homeStyle.IconLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com"
              className={homeStyle.IconLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com"
              className={homeStyle.IconLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className={homeStyle.WatermarkContainer}>
          <img
            src={Watermark1}
            style={{ width: "50rem" }}
            alt="Firas Watermark1"
          />
          <img
            src={Watermark2}
            style={{ width: "50rem" }}
            alt="Firas Watermark2"
          />
        </div>
      </div>
      <Portfolio />
      <Accomplishments />
      <Feedback />
      <Collection collectionType={true} />
      <CorporateService />
      <Collection collectionType={false} />
      <Drone/>
      <Footer/>
    </>
  );
};

export default Home;
