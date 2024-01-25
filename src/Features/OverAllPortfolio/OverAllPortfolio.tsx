import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OverAllPortfolioStyle from "./OverAllPortfolio.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel from "../../Components/Carousel";
import Watermark1 from "../../Assets/WatermarkFiras.svg";

const OverAllPortfolio = () => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");
  const navigate = useNavigate();
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    setIsPageVisible(true);
    return () => setIsPageVisible(false);
  }, []);

  const handleBack = () => {
    setIsPageVisible(false);
    setTimeout(() => {
      navigate("/Home");
    }, 300); // Adjust the timeout to match the transition duration
  };

  return (
    <>
      <div className={OverAllPortfolioStyle.BackContainer}>
        <img src={Watermark1} alt="Watermark" />
      </div>
      <div
        className={`${OverAllPortfolioStyle.Container} ${
          isPageVisible ? OverAllPortfolioStyle.visible : ""
        }`}
      >
        <div className={OverAllPortfolioStyle.TextContainer}>
          <div
            className={OverAllPortfolioStyle.LinkContainer}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon style={{ fontSize: "2.5rem" }} />
          </div>
          <div className={OverAllPortfolioStyle.titleContainer}>
            <p>{type}</p>
          </div>
        </div>
        <div className={OverAllPortfolioStyle.carouselContainer}>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default OverAllPortfolio;
