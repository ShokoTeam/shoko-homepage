import React from "react";
import { Parallax } from "react-parallax";
import Logo from "../../images/logo_white.png";
import Arrow from "../../images/icons/ArrowDown.svg";
import "./hero.css";

const hero = () => {
  return (
    <div className="wrapper">
      <Parallax
        bgImage={require("../../images/Bongo-Jams.gif")}
        bgImageAlt="Not found"
        strength={600}
      >
        <div className="hero__container">
          <img src={Logo} alt="shoko" className="hero__logo" />
          <div className="hero__content">
            <h1 className="hero__heading">Shoko</h1>
            <h3 className="hero__desription">App development, and other</h3>
          </div>
          <img src={Arrow} alt="arrow" className="hero__arrow" />
        </div>
      </Parallax>
    </div>
  );
};

export default hero;
