import React, { FC } from "react";
import collectionStyle from "./Collection.module.css";
import duckImage from "../../Assets/Website Images/DuckImage.jpg";

interface CollectionProps {
  collectionType: boolean;
}

const Collection: FC<CollectionProps> = ({ collectionType }) => {
  return (
    <>
      <div
        className={collectionStyle.Container}
        style={{ backgroundImage: `url(${duckImage} )` }}
      >
        <div className={collectionStyle.overlayContainer}>
          {collectionType && (
            <div className={collectionStyle.textContainer}>
              <p>PHOTO & VIDEO COLLECTION</p>
              <h1>Collection of</h1>
              <h1>Special Captures</h1>
            </div>
          )}
        </div>
      </div>
      {collectionType ? (
        <div className={collectionStyle.CollectionTitlesContainerFirst}>
          <a href="/over-all-portfolio?type=Portrait Collection">
            <h1>Portraits</h1>
          </a>
          <a href="/over-all-portfolio?type=Animal Collection">
            <h1>Animals</h1>
          </a>
          <a href="/over-all-portfolio?type=Fashion Collection">
            <h1>Fashion</h1>
          </a>
          <a href="/over-all-portfolio?type=Landscape Collection">
            <h1>Landscapes</h1>
          </a>
          <a href="/over-all-portfolio?type=Family Collection">
            <h1>Family</h1>
          </a>
          <a href="/over-all-portfolio?type=Shoots Collection">
            <h1>Shoots</h1>
          </a>
        </div>
      ) : (
        <div className={collectionStyle.CollectionTitlesContainerSecond}>
          <a href="/over-all-portfolio?type=Advertising Collection">
            <h1>Advertising</h1>
          </a>
          <a href="/over-all-portfolio?type=Weddings Collection">
            <h1>Weddings</h1>
          </a>
          <a href="/over-all-portfolio?type=Events Collection">
            <h1>Events</h1>
          </a>
          <a href="/over-all-portfolio?type=Birthday Collection">
            <h1>Birthday</h1>
          </a>
          <a href="/over-all-portfolio?type=Drone Collection">
            <h1>Drone</h1>
          </a>
          <a href="/over-all-portfolio?type=Construction Collection">
            <h1>Construction</h1>
          </a>
        </div>
      )}
    </>
  );
};

export default Collection;
