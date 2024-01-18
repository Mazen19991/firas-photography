import React, { FC } from "react";
import footerStyle from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: FC = () => {
  return (
    <div id="Footer" className={footerStyle.Container}>
      <div className={footerStyle.InnerContainer}>
        <div className={footerStyle.topContainer}>
          <a
            href="https://www.facebook.com"
            className={footerStyle.IconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com"
            className={footerStyle.IconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.instagram.com"
            className={footerStyle.IconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className={footerStyle.bottomContainer}>
          <h1 className={footerStyle.FirstLine}>Let's work together!</h1>
          <h1 className={footerStyle.SecondLine}>
            Just drop me a line - firasbouhatoum@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
