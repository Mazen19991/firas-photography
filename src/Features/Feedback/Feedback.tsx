import React, { FC, useState } from "react";
import feedbackStyle from "./Feedback.module.css";
import WatermarkComma from "../../Assets/watermark3-Comma.png";
import WatermarkRectangle from "../../Assets/watermark4-rectangle.png";
import Avatars from "./Avatars";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Feedback: FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);

  const handleAvatarChange = (number: number) => {
    setSelectedAvatar(number);
  };

  const handleNextAvatar = () => {
    setSelectedAvatar((prevAvatar) => (prevAvatar % 3) + 1);
  };

  const handlePrevAvatar = () => {
    setSelectedAvatar((prevAvatar) => ((prevAvatar - 2 + 3) % 3) + 1);
  };

  return (
    <>
      <div className={feedbackStyle.Container}>
        <div className={feedbackStyle.leftContainer}>
          <p className={feedbackStyle.TiltedText}>FEEDBACK</p>
        </div>
        <div className={feedbackStyle.rightContainer}>
          <div className={feedbackStyle.AvatarContainer}>
            <Avatars
              selectedAvatar={selectedAvatar}
              onAvatarChange={handleAvatarChange}
            />
          </div>
          <div className={feedbackStyle.FeedbackContainer}>
            <div className={feedbackStyle.FeedbackTextContainer}>
              {selectedAvatar === 1 && (
                <p>
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                  Firas Firas Firas Firas Firas Firas Firas Firas Firas Firas
                </p>
              )}
              {selectedAvatar === 2 && (
                <p>
                  The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is The Is The Is The Is The Is The Is The Is The
                  Is The Is The Is
                </p>
              )}
              {selectedAvatar === 3 && (
                <p>
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best Best Best Best Best
                  Best Best Best Best Best Best Best Best
                </p>
              )}
            </div>
            <div className={feedbackStyle.FeedbackButtonContainer}>
              <button onClick={handlePrevAvatar}>
                <WestIcon sx={{ width: "1rem", margin: "0", padding: "0" }} />
              </button>
              <button onClick={handleNextAvatar}>
                <EastIcon sx={{ width: "1rem", margin: "0", padding: "0" }} />
              </button>
            </div>
          </div>
        </div>
        <div className={feedbackStyle.WatermarkContainer}>
          <img
            src={WatermarkComma}
            alt="Watermark"
            className={feedbackStyle.WatermarkComma}
          />
          <img
            src={WatermarkRectangle}
            alt="Watermark"
            className={feedbackStyle.WatermarkRectangle}
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
