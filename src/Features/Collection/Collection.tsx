import React from "react";
import collectionStyle from "./Collection.module.css";
import duckImage from "../../Assets/Website Images/DuckImage.jpg";

const Collection = () => {
  return (
    <>
      <div
        className={collectionStyle.Container}
        style={{ backgroundImage: `url(${duckImage} )` }}
      >
        <div className={collectionStyle.overlayContainer}>
          <div className={collectionStyle.textContainer}>
            <p>PHOTO & VIDEO COLLECTION</p>
            <h1>Collection of</h1>
            <h1>Special Captures</h1>
          </div>
        </div>
      </div>
      <div className={collectionStyle.CollectionTitlesContainer}>
        <a href=""><h1>Portraits</h1></a>
        <a href=""><h1>Animals</h1></a>
        <a href=""><h1>Fashion</h1></a>
        <a href=""><h1>Landscapes</h1></a>
        <a href=""><h1>Family</h1></a>
        <a href=""><h1>Shoots</h1></a>
      </div>
    </>
  );
};

export default Collection;
