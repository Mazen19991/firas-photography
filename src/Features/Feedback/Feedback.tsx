import React, { FC } from "react";
import feedbackStyle from "./Feedback.module.css";
import WatermarkComma from "../WatermarkComma/watermark3-Comma.png";
import WatermarkRectangle from "../WatermarkComma/watermark4-rectangle.png";
import Avatars from "./Avatars";

const Feedback: FC = () => {
  return (
    <>
      <div className={feedbackStyle.Container}>
        <div className={feedbackStyle.leftContainer}>
          <p className={feedbackStyle.TiltedText}>Feedback</p>
        </div>
        <div className={feedbackStyle.rightContainer}>
          <div>
            <Avatars />
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
