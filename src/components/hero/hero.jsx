import React from "react";
import Logo from "../../images/logo_white.png";
import Arrow from "../../images/icons/ArrowDown.svg";
import "./hero.css";

const hero = () => {
  return (
    <div className="wrapper">
      <div class="parallax">
        <div class="parallax-content">
          <div className="hero__container">
            <img src={Logo} alt="shoko" className="hero__logo" />
            <div className="hero__content">
              <h1 className="hero__heading">Shoko</h1>
              <h3 className="hero__desription">App development, and other</h3>
            </div>
            <img src={Arrow} alt="arrow" className="hero__arrow" />
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </div>
  );
};

export default hero;
