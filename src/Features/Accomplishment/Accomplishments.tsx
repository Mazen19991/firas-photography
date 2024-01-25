import React, { FC } from "react";
import { Link } from "react-router-dom";
import accomplishmentStyle from "./Accomplishments.module.css";

const Accomplishments: FC = () => {
  return (
    <>
      <div className={accomplishmentStyle.Container}>
        <Link to="/over-all-portfolio?type=Awards" className={accomplishmentStyle.ContainerLink}>
          Awards
        </Link>
        <Link to="/over-all-portfolio?type=Certificates" className={accomplishmentStyle.ContainerLink}>
          Certificates
        </Link>
        <Link to="/over-all-portfolio?type=Competitions" className={accomplishmentStyle.ContainerLink}>
          Competitions
        </Link>
      </div>
    </>
  );
};

export default Accomplishments;
