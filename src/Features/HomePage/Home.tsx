// Home.tsx
import React, { FC, useState, useEffect } from "react";
import Picture1 from "../../Assets/Firas.png";
import Picture2 from "../../Assets/AP7A3524.jpg"; // Change this to the path of your new image
import homeStyle from "./Home.module.css";
import Header from "../../Components/Layout/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home: FC = () => {
  const [change, setChange] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to new data after 5 seconds
      setChange(true);

      // Reset to original data after another 5 seconds
      setTimeout(() => {
        setChange(false);
      }, 10000);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <div className={homeStyle.Container}>
        <div className={homeStyle.LeftContainer}>
          <p className={homeStyle.TiltedText}>ONLINE PORTFOLIO</p>
          <div className={homeStyle.NameContainer}>
            <h1 className={homeStyle.Name}>
              {!change ? (
                <>
                  Firas <br /> Bou Hatoum
                </>
              ) : (
                <>
                  About <br /> Me
                </>
              )}
            </h1>
            <div className={homeStyle.buttonContainer}>
              {!change ? (
                <button className={homeStyle.ContactButton}>
                  <p className={homeStyle.ContactButtonText}>Contact me</p>
                </button>
              ) : (
                <p className={homeStyle.TextElement}>
                  Your Text Here - About Me Description...Your Text Here - About
                  Me Description...Your Text Here - About Me Description...Your
                  Text Here - About Me Description...Your Text Here - About Me
                  Description...Your Text Here - About Me Description...Your
                  Text Here - About Me Description...Your Text Here - About Me
                  Description...Your Text Here - About Me Description...Your
                  Text Here - About Me Description...Your Text Here - About Me
                  Description...Your Text Here - About Me Description...Your
                  Text Here - About Me Description...
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={homeStyle.RightContainer}>
          <div className={homeStyle.ImageContainer}>
            <img
              src={Picture1}
              alt="Firas Bou Hatoum"
              style={{
                transform: change ? "translateX(-100%)" : "translateX(0)",
                backgroundSize: "cover",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
              }}
            />
            <img
              src={Picture2}
              alt="Firas Bou Hatoum"
              style={{
                transform: change ? "translateX(-100%)" : "translateX(0)",
                backgroundSize: "cover",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className={homeStyle.IconContainer}>
            <FacebookIcon sx={{}} />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
